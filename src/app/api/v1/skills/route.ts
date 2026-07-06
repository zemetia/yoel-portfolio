import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  name: z.string(),
  list: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  proficiency: z.number().int().min(1).max(5).optional().nullable(),
  iconSlug: z.string().optional().nullable(),
  isVisible: z.boolean().optional().default(true),
  order: z.number().int().optional().default(0),
});

// GET /api/v1/skills?profileId=xxx&category=Frontend&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["name"]);
    const [data, total] = await Promise.all([
      prisma.skill.findMany({ ...filters }),
      prisma.skill.count({ where: filters.where }),
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

// POST /api/v1/skills
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.skill.create({ data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
