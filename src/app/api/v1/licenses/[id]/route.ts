import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  name: z.string().optional(),
  issuer: z.string().optional(),
  url: z.string().optional().nullable(),
  issueDate: z.string().datetime().optional().nullable(),
  expiryDate: z.string().datetime().optional().nullable(),
  doesNotExpire: z.boolean().optional(),
  credentialId: z.string().optional().nullable(),
  credentialUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  images: z.array(z.string()).optional(),
  aiHint: z.string().optional().nullable(),
  isVisible: z.boolean().optional(),
  order: z.number().int().optional(),
});

// GET /api/v1/licenses/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.license.findUnique({ where: { id } });
    if (!data) return notFound("License not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// DELETE /api/v1/licenses/:id
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.license.delete({ where: { id } });
    return ok({ id });
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/licenses/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.license.update({ where: { id }, data: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
