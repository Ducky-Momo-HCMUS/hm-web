import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const homeroomResolver: Resolvers<ResolverContext> = {
  Query: {
    homeroomList: async (_, __, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.homeroomAPI.getHomeroomList(accessToken)) || null
      );
    },
    homeroomStudentList: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (
        (await dataSources.homeroomAPI.getHomeroomStudentList(
          args,
          accessToken
        )) || null
      );
    },
  },
};

export default homeroomResolver;
