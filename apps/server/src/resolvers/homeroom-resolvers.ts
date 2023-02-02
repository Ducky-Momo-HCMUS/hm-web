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
    homeroomNotEnrolledListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomNotEnrolledListByTerm(
          args
        )) || null
      );
    },
    homeroomPostponeExamListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomPostponeExamListByTerm(
          args
        )) || null
      );
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
    homeroomExamPostponedListByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.homeroomAPI.getHomeroomExamPostponedListByTerm(
          args
        )) || null
      );
    },
  },
};

export default homeroomResolver;
