import { objectType } from 'nexus';

export const CategoryBackend = objectType({
  name: 'CategoryBackend',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.level();
    t.model.parentId();
    t.model.show();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
