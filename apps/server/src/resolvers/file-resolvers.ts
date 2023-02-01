import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const fileResolver: Resolvers<ResolverContext> = {
  Mutation: {
    uploadDocument: async (_, args, { dataSources }) => {
      return (await dataSources.fileAPI.uploadDocument(args)) || null;
    },
  },
};

export default fileResolver;
