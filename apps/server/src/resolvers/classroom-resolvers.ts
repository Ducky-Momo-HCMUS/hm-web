import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const classroomResolver: Resolvers<ResolverContext> = {
  Query: {
    classroomList: async (_, args, { dataSources }) => {
      const res = await dataSources.classroomAPI.getClassroomList(args);
      return res.data;
    },
    classroomScoreList: async (_, args, { dataSources }) => {
      const res = await dataSources.classroomAPI.getClassroomScoreList(args);
      return res;
    },
  },
};

export default classroomResolver;
