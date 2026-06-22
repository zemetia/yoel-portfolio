import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  slug: z.string().optional(),
  fullName: z.string().optional(),
  headline: z.string().optional(),
  summary: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  birthDate: z.string().datetime().optional().nullable(),
  website: z.string().optional().nullable(),
  linkedinUrl: z.string().optional().nullable(),
  githubUrl: z.string().optional().nullable(),
  twitterUrl: z.string().optional().nullable(),
  instagramUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
  mediumUrl: z.string().optional().nullable(),
  avatarUrl: z.string().optional().nullable(),
  resumeUrl: z.string().optional().nullable(),
  heroSubtitle: z.string().optional().nullable(),
  heroSequences: z.any().optional().nullable(),
  visibleSections: z.array(z.string()).optional(),
  activeTheme: z.string().optional().nullable(),
});

// GET /api/v1/profiles/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.profile.findUnique({
      where: { id },
      include: {
        skills: { orderBy: { order: "asc" } },
        education: { orderBy: { startDate: "desc" } },
        experience: { orderBy: { startDate: "desc" } },
        projects: { orderBy: { order: "asc" } },
        publications: { orderBy: { publishedDate: "desc" } },
        licenses: { orderBy: { issueDate: "desc" } },
        volunteerExp: { orderBy: { startDate: "desc" } },
        organizations: { orderBy: { startDate: "desc" } },
        contacts: { orderBy: { createdAt: "desc" } },
      },
    });
    if (!data) return notFound("Profile not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/profiles/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);

    const data = await prisma.profile.update({
      where: { id },
      data: parsed.data!,
    });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
