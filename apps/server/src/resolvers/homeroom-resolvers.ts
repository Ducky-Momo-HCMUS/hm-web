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
      return res;
    },
    homeroomDetail: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomDetail(args);
      return res.data;
    },
    homeroomTermList: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomTermList(args);
      return res.data;
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
      const res = await dataSources.homeroomAPI.getHomeroomOverviewReportByTerm(
        args
      );
      return res.data;
    },
    homeroomFinalResultListByTerm: async (_, args, { dataSources }) => {
      const res =
        await dataSources.homeroomAPI.getHomeroomFinalResultListByTerm(args);
      return res.data;
    },
    homeroomExamAbsentListByTerm: async (_, args, { dataSources }) => {
      const res = await dataSources.homeroomAPI.getHomeroomExamAbsentListByTerm(
        args
      );
      return res.data;
    },
  },
};

export default homeroomResolver;
