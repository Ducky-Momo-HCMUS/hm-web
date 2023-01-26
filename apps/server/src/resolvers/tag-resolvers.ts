import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const tagResolver: Resolvers<ResolverContext> = {
  Query: {
    tagList: async (_, __, { dataSources }) => {
      const res = await dataSources.tagAPI.getTagList();
      return res.data;
    },
  },
};

export default tagResolver;
