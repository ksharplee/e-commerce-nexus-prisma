import { queryType } from 'nexus';
import { CategoryBackend } from './CategoryBackend';

export const Query = queryType({
  definition(t) {
    t.nonNull.list.field('categoriesBackend', {
      type: CategoryBackend,
      resolve: async (_root, _args, { prisma }) => {
        return await prisma.categoryBackend.findMany({
          where: {
            parentId: null,
          },
          include: {
            children: true,
          },
        });
      },
    });
  },
});
