import { prisma } from './db';
import { PrismaClient } from '@prisma/client';

export interface context {
  prisma: PrismaClient;
}

export const context = {
  prisma,
};
