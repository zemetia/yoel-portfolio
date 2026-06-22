import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  company: z.string(),
  position: z.string(),
  location: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional().default(false),
  description: z.string().optional().nullable(),
  achievements: z.array(z.string()).optional().default([]),
  companyUrl: z.string().optional().nullable(),
  companyLogo: z.string().optional().nullable(),
  employmentType: z.string().optional().nullable(),
});

// GET /api/v1/experiences?profileId=xxx&company=Google&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["company", "position", "description"]);
    const [data, total] = await Promise.all([
      prisma.experience.findMany({ ...filters }),
      prisma.experience.count({ where: filters.where }),
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

// POST /api/v1/experiences
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.experience.create({ data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
