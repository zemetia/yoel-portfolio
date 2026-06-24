import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { created, ok, parseFilters, serverError } from "@/lib/api-helpers";

// GET /api/v1/profiles?slug=main&search=...
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const filters = parseFilters(searchParams, [
      "fullName", "headline", "summary", "location",
    ]);

    const [data, total] = await Promise.all([
      prisma.profile.findMany({
        ...filters,
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
      }),
      prisma.profile.count({ where: filters.where }),
    ]);

    return ok(data, {
      total,
      page: Number(searchParams.get("page")) || 1,
      limit: filters.take,
    });
  } catch (error) {
    return serverError(error);
  }
}

// POST /api/v1/profiles
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await prisma.profile.create({ data: body });
    return created(data);
  } catch (error) {
    return serverError(error);
  }
}
