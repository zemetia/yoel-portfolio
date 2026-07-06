import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  location: z.string().optional().nullable(),
  locationType: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional(),
  description: z.string().optional().nullable(),
  achievements: z.array(z.string()).optional(),
  companyUrl: z.string().optional().nullable(),
  companyLogo: z.string().optional().nullable(),
  employmentType: z.string().optional().nullable(),
  images: z.array(z.string()).optional(),
  aiHint: z.string().optional().nullable(),
  isVisible: z.boolean().optional(),
  order: z.number().int().optional(),
});

// GET /api/v1/experiences/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.experience.findUnique({ where: { id } });
    if (!data) return notFound("Experience not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// DELETE /api/v1/experiences/:id
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.experience.delete({ where: { id } });
    return ok({ id });
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/experiences/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.experience.update({ where: { id }, data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
