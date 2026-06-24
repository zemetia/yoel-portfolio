import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  name: z.string().optional(),
  role: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  startDate: z.string().datetime().optional().nullable(),
  endDate: z.string().datetime().optional().nullable(),
  isCurrent: z.boolean().optional(),
  description: z.string().optional().nullable(),
  order: z.number().int().optional(),
});

// GET /api/v1/organizations/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.organization.findUnique({ where: { id } });
    if (!data) return notFound("Organization not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// DELETE /api/v1/organizations/:id
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.organization.delete({ where: { id } });
    return ok({ id });
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/organizations/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.organization.update({ where: { id }, data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
