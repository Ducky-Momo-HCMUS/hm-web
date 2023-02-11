import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const homeroomResolver: Resolvers<ResolverContext> = {
  Query: {
    homeroomList: async (_, __, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomList();
      return res.data;
    },
    homeroomAllList: async (_, __, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomAllList();
      return res;
    },
    homeroomStudentList: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomStudentList(args);
      return res.data;
    },
    homeroomDetail: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomDetail(args);
      return res.data;
    },
    homeroomTermList: async (_, args, { dataSources }) => {
      return (await dataSources.homeroomAPI.getHomeroomTermList(args)) || null;
    },
    homeroomFailListByTerm: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomFailListByTerm(args);
      return res.data;
    },
    homeroomNotEnrolledListByTerm: async (_, args, { dataSources }) => {
      const res =
        await dataSources.homeroomAPI.getHomeroomNotEnrolledListByTerm(args);
      return res.data;
    },
    homeroomPostponeExamListByTerm: async (_, args, { dataSources }) => {
      const res =
        await dataSources.homeroomAPI.getHomeroomPostponeExamListByTerm(args);
      return res.data;
    },
    homeroomOverviewReportByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomOverviewReportByTerm(args)) ||
        null
      );
    },
    homeroomFinalResultListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomFinalResultListByTerm(
          args
        )) || null
      );
    },
    homeroomExamAbsentListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomExamAbsentListByTerm(args)) ||
        null
      );
    },
  },
};

export default homeroomResolver;
