import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  name: z.string().optional(),
  list: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  proficiency: z.number().int().min(1).max(5).optional().nullable(),
  iconSlug: z.string().optional().nullable(),
  order: z.number().int().optional(),
});

// GET /api/v1/skills/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.skill.findUnique({ where: { id } });
    if (!data) return notFound("Skill not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// DELETE /api/v1/skills/:id
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.skill.delete({ where: { id } });
    return ok({ id });
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/skills/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.skill.update({ where: { id }, data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
