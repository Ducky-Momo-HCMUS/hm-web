import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const courseResolver: Resolvers<ResolverContext> = {
  Query: {
    courseList: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.getCourseList(args);
      return res;
    },
  },
};

export default courseResolver;
