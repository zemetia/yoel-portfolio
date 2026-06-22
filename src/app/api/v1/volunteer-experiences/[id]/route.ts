import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  organization: z.string().optional(),
  role: z.string().optional(),
  cause: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional(),
  description: z.string().optional().nullable(),
  achievements: z.array(z.string()).optional(),
});

// GET /api/v1/volunteer-experiences/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.volunteerExperience.findUnique({ where: { id } });
    if (!data) return notFound("Volunteer experience not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/volunteer-experiences/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.volunteerExperience.update({ where: { id }, data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
