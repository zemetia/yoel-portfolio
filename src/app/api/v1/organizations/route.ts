import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  name: z.string(),
  role: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional().default(false),
  description: z.string().optional().nullable(),
});

// GET /api/v1/organizations?profileId=xxx&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["name", "role", "description"]);
    const [data, total] = await Promise.all([
      prisma.organization.findMany({ ...filters }),
      prisma.organization.count({ where: filters.where }),
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

// POST /api/v1/organizations
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.organization.create({ data: parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
