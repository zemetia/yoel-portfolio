import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  name: z.string(),
  issuer: z.string(),
  url: z.string().optional().nullable(),
  issueDate: z.string().datetime().optional().nullable(),
  expiryDate: z.string().datetime().optional().nullable(),
  doesNotExpire: z.boolean().optional().default(false),
  credentialId: z.string().optional().nullable(),
  credentialUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
});

// GET /api/v1/licenses?profileId=xxx&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["name", "issuer"]);
    const [data, total] = await Promise.all([
      prisma.license.findMany({ ...filters }),
      prisma.license.count({ where: filters.where }),
    ]);
    return ok(data, {
      total,
      page: Number(request.nextUrl.searchParams.get("page")) || 1,
      limit: filters.take,
    });
  } catch (error) {
    return serverError(error);
  }
}

// POST /api/v1/licenses
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.license.create({ data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
