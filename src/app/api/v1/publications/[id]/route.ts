import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, notFound, ok, parseBody, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const updateSchema = z.object({
  profileId: z.string().optional(),
  title: z.string().optional(),
  publisher: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  publishedDate: z.string().datetime().optional().nullable(),
  description: z.string().optional().nullable(),
  authors: z.array(z.string()).optional(),
  doi: z.string().optional().nullable(),
});

// GET /api/v1/publications/:id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prisma.publication.findUnique({ where: { id } });
    if (!data) return notFound("Publication not found");
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}

// PATCH /api/v1/publications/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = parseBody(updateSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.publication.update({ where: { id }, data: parsed.data! });
    return ok(data);
  } catch (error) {
    return serverError(error);
  }
}
