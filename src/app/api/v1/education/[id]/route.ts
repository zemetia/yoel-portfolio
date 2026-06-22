import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  institution: z.string().optional(),
  degree: z.string().optional().nullable(),
  field: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional(),
  gpa: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
});

// GET /api/v1/education/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.education.findUnique({ where: { id } });
    if (!data) return notFound("Education not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/education/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.education.update({ where: { id }, data: parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
