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
  },
};

export default homeroomResolver;
