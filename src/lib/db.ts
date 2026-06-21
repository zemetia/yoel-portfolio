// lib/db.ts
//
// Singleton Prisma client for server-side database access.
// Re-exported as a convenience for both repository and service layers.
//
// ─── Usage ───────────────────────────────────────────────────────────────────
//
//   import { prisma } from '@/lib/db';
//   const users = await prisma.user.findMany();
//
// Do NOT import PrismaClient directly elsewhere — always go through this module
// so the singleton pattern is respected across hot reloads.

import { PrismaClient } from '@/lib/generated/prisma';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env['NODE_ENV'] === 'development'
        ? ['query', 'warn', 'error']
        : ['warn', 'error'],
  });

if (process.env['NODE_ENV'] !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
