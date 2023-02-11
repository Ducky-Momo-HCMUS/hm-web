import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const teacherResolver: Resolvers<ResolverContext> = {
  Query: {
    teacherList: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.getTeacherList(args);
      return res;
    },
    yearList: async (_, __, { dataSources }) => {
      const res = await dataSources.teacherAPI.getYearList();
      return res;
    },
  },
};

export default teacherResolver;
