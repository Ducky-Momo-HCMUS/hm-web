import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const homeroomResolver: Resolvers<ResolverContext> = {
  Query: {
    homeroomList: async (_, __, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomList();
      return res.data;
    },
    homeroomStudentList: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomStudentList(args);
      return res.data;
    },
    homeroomDetail: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomDetail(args)) || null;
    },
    homeroomTermList: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomTermList(args)) || null;
    },
    homeroomFailListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomFailListByTerm(args)) || null
      );
    },
    homeroomFailList: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomFailList(args)) || null;
    },
    homeroomNotEnrolledListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomNotEnrolledListByTerm(
          args
        )) || null
      );
    },
    homeroomNotEnrolledList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomNotEnrolledList(args)) || null
      );
    },
    homeroomPostponeExamListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomPostponeExamListByTerm(
          args
        )) || null
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
