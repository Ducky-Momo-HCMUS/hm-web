import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
    studentSubjectsByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentSubjectsByTerm(args)) || null
      );
    },
    studentAllSubjects: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentAllSubjects(args)) || null;
    },
    studentTrainingPointByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentTrainingPointByTerm(args)) ||
        null
      );
    },
    studentTrainingPoint: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentTrainingPoint(args)) || null
      );
    },
    studentAveragePointByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentAveragePointByTerm(args)) ||
        null
      );
    },
    studentAveragePoint: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentAveragePoint(args)) || null
      );
    },
    studentAllTerms: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentAllTerms(args)) || null;
    },
    studentDetail: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentDetail(args)) || null;
    },
    studentParentInfoList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentParentInfoList(args)) || null
      );
    },
  },
};

export default studentResolver;
