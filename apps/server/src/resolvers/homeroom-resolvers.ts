import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const homeroomResolver: Resolvers<ResolverContext> = {
  Query: {
    homeroomList: async (_, __, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomList()) || null;
    },
    homeroomStudentList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomStudentList(args)) || null
      );
    },
    homeroomTermList: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomTermList(args)) || null;
    },
    homeroomFailList: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomFailList(args)) || null;
    },
    homeroomNotEnrolledList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomNotEnrolledList(args)) || null
      );
    },
    homeroomPostponeExamList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomPostponeExamList(args)) ||
        null
      );
    },
  },
};

export default homeroomResolver;
