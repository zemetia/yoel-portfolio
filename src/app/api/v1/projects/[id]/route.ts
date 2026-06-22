import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
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
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
  collaborators: z.array(z.string()).optional(),
  client: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  duration: z.string().optional().nullable(),
  servicesProvided: z.array(z.string()).optional(),
  techStack: z.array(z.string()).optional(),
  isFeatured: z.boolean().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
  aiHint: z.string().optional().nullable(),
  publishedAt: z.string().datetime().optional().nullable(),
  order: z.number().int().optional(),
});

// GET /api/v1/projects/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.project.findUnique({ where: { id } });
    if (!data) return notFound("Project not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/projects/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.project.update({ where: { id }, data: parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
