import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
    studentSubjectsByTerm: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getStudentSubjectsByTerm(
          args,
          accessToken
        )) || null
      );
    },
    studentAllSubjects: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getStudentAllSubjects(
          args,
          accessToken
        )) || null
      );
    },
    studentTrainingPointByTerm: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getStudentTrainingPointByTerm(
          args,
          accessToken
        )) || null
      );
    },
    studentAllTerms: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getStudentAllTerms(args, accessToken)) ||
        null
      );
    },
  },
};

export default studentResolver;
