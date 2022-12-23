import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
    subjectsByTerm: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getSubjectsByTerm(args, accessToken)) ||
        null
      );
    },
    allSubjects: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getAllSubjects(args, accessToken)) || null
      );
    },
    trainingPointByTerm: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getTrainingPointByTerm(
          args,
          accessToken
        )) || null
      );
    },
    allTerms: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.studentAPI.getAllTerms(args, accessToken)) || null
      );
    },
  },
};

export default studentResolver;
