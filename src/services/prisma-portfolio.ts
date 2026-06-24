import { prisma } from '@/lib/prisma';

export const prismaPortfolioService = {
  async getPortfolioData(slug = 'main') {
    const profile = await prisma.profile.findUnique({
      where: { slug },
      include: {
        skills:       { orderBy: { order: 'asc' } },
        education:    { orderBy: { startDate: 'desc' } },
        experience:   { orderBy: { order: 'asc' } },
        projects:     { orderBy: { order: 'asc' } },
        publications: { orderBy: { publishedDate: 'desc' } },
        licenses:     { orderBy: { issueDate: 'desc' } },
        volunteerExp: { orderBy: { order: 'asc' } },
        organizations:{ orderBy: { order: 'asc' } },
        contacts:     { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!profile) return null;

    return {
      profile,
      skills:              profile.skills,
      education:           profile.education,
      experience:          profile.experience,
      projects:            profile.projects,
      publications:        profile.publications,
      licenses:            profile.licenses,
      volunteerExperience: profile.volunteerExp,
      organizations:       profile.organizations,
    };
  },
};
