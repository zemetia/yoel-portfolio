import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { bad, created, ok, parseBody, parseFilters, serverError } from "@/lib/api-helpers";
import { z } from "zod";

const createSchema = z.object({
  profileId: z.string().optional().nullable(),
  name: z.string(),
  email: z.string().email(),
  subject: z.string().optional().nullable(),
  message: z.string(),
  isRead: z.boolean().optional().default(false),
  repliedAt: z.string().datetime().optional().nullable(),
});

// GET /api/v1/contacts?profileId=xxx&isRead=false&search=...
export async function GET(request: NextRequest) {
  try {
    const filters = parseFilters(request.nextUrl.searchParams, ["name", "email", "subject", "message"]);
    const [data, total] = await Promise.all([
      prisma.contact.findMany({ ...filters }),
      prisma.contact.count({ where: filters.where }),
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

// POST /api/v1/contacts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = parseBody(createSchema, body);
    if (parsed.error) return bad(parsed.error);
    const data = await prisma.contact.create({ data: parsed.data! });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
