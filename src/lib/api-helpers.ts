import { NextResponse } from "next/server";
import { z } from "zod";

// ─── Response helpers ────────────────────────────────────────────────────────

export function ok<T>(data: T, meta?: { total?: number; page?: number; limit?: number }) {
  return NextResponse.json({ success: true, data, ...(meta ? { meta } : {}) });
}

export function created<T>(data: T) {
  return NextResponse.json({ success: true, data }, { status: 201 });
}

export function bad(message: string) {
  return NextResponse.json({ success: false, error: message }, { status: 400 });
}

export function notFound(message = "Resource not found") {
  return NextResponse.json({ success: false, error: message }, { status: 404 });
}

export function serverError(error: unknown) {
  const message = error instanceof Error ? error.message : "Internal server error";
  console.error("[API Error]", error);
  return NextResponse.json({ success: false, error: message }, { status: 500 });
}

// ─── Filter parsing ──────────────────────────────────────────────────────────

type PrismaQuery = {
  where: Record<string, unknown>;
  orderBy: Record<string, "asc" | "desc">;
  skip: number;
  take: number;
};

const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  sort: z.string().optional().default("createdAt"),
  order: z.enum(["asc", "desc"]).optional().default("desc"),
});

/**
 * Parse NextRequest searchParams into Prisma-compatible query.
 * Supports:
 *   - `search`   → fuzzy search on text fields
 *   - `ids`      → comma-separated list of IDs
 *   - any other key → exact match filter
 *   - `sort`, `order`, `page`, `limit` → pagination
 */
export function parseFilters(
  searchParams: URLSearchParams,
  searchFields: string[] = ["title", "name", "description", "summary"]
): PrismaQuery {
  const params = Object.fromEntries(searchParams.entries());

  const { page, limit, sort, order } = paginationSchema.parse(params);

  const where: Record<string, unknown> = {};
  const skip = (page - 1) * limit;
  const orderBy = { [sort ?? "createdAt"]: order ?? "desc" };

  for (const [key, value] of Object.entries(params)) {
    if (["page", "limit", "sort", "order", "search"].includes(key)) continue;

    // comma-separated list → `in` filter
    if (key.endsWith("Ids") || key === "ids") {
      where["id"] = { in: value.split(",").map((s: string) => s.trim()) };
      continue;
    }

    // Normalize: `status` → DRAFT/PUBLISHED kept as string, numbers stay
    if (value === "true") where[key] = true;
    else if (value === "false") where[key] = false;
    else if (!isNaN(Number(value)) && value !== "") where[key] = Number(value);
    else where[key] = value;
  }

  // Search: fuzzy on searchFields
  const search = params.search;
  if (search && searchFields.length > 0) {
    where["OR"] = searchFields.map((field) => ({
      [field]: { contains: search, mode: "insensitive" },
    }));
  }

  return { where, orderBy, skip, take: limit };
}

// ─── Body validation ─────────────────────────────────────────────────────────

export function parseBody<T>(
  schema: z.ZodType<T>,
  body: unknown,
): { data?: T; error?: string } {
  const result = schema.safeParse(body);
  if (!result.success) {
    const first = result.error.issues[0];
    if (!first) return { error: "Validation failed" };
    return { error: `${(first.path ?? []).join(".")}: ${first.message}` };
  }
  return { data: result.data };
}
