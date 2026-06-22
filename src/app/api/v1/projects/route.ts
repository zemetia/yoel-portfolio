import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string(),
  title: z.string(),
  slug: z.string(),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  coverImage: z.string().optional().nullable(),
  gallery: z.any().optional().nullable(),
  body: z.any().optional().nullable(),
  liveUrl: z.string().optional().nullable(),
  githubUrl: z.string().optional().nullable(),
  projectUrl: z.string().optional().nullable(),
  caseStudyUrl: z.string().optional().nullable(),
  year: z.number().int().optional().nullable(),
  tags: z.array(z.string()).optional().default([]),
  images: z.array(z.string()).optional().default([]),
  collaborators: z.array(z.string()).optional().default([]),
  client: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  duration: z.string().optional().nullable(),
  servicesProvided: z.array(z.string()).optional().default([]),
  techStack: z.array(z.string()).optional().default([]),
  isFeatured: z.boolean().optional().default(false),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional().default("PUBLISHED"),
  aiHint: z.string().optional().nullable(),
  publishedAt: z.string().datetime().optional().nullable(),
  order: z.number().int().optional().default(0),
});

// GET /api/v1/projects?profileId=xxx&status=PUBLISHED&tag=react&year=2024&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["title", "summary", "description", "client"]);
    const [data, total] = await Promise.all([
      prisma.project.findMany({ ...filters }),
      prisma.project.count({ where: filters.where }),
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

// POST /api/v1/projects
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.project.create({ data: parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
