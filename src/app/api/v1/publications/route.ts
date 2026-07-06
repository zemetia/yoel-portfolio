import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  title: z.string(),
  publisher: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  publishedDate: z.string().datetime().optional().nullable(),
  description: z.string().optional().nullable(),
  authors: z.array(z.string()).optional().default([]),
  doi: z.string().optional().nullable(),
  publicationType: z.string().optional().nullable(),
  isVisible: z.boolean().optional().default(true),
  order: z.number().int().optional().default(0),
});

// GET /api/v1/publications?profileId=xxx&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["title", "publisher", "description"]);
    const [data, total] = await Promise.all([
      prisma.publication.findMany({ ...filters }),
      prisma.publication.count({ where: filters.where }),
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

// POST /api/v1/publications
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.publication.create({ data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
