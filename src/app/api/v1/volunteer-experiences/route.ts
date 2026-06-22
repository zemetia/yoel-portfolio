import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  organization: z.string(),
  role: z.string(),
  cause: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional().default(false),
  description: z.string().optional().nullable(),
  achievements: z.array(z.string()).optional().default([]),
});

// GET /api/v1/volunteer-experiences?profileId=xxx&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["organization", "role", "cause", "description"]);
    const [data, total] = await Promise.all([
      prisma.volunteerExperience.findMany({ ...filters }),
      prisma.volunteerExperience.count({ where: filters.where }),
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

// POST /api/v1/volunteer-experiences
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.volunteerExperience.create({ data: parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
