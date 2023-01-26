import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const tagResolver: Resolvers<ResolverContext> = {
  Query: {
    tagList: async (_, __, { dataSources }) => {
      const res = await dataSources.tagAPI.getTagList();
      return res.data;
    },
  },
  Mutation: {
    tagAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.addTag(args);
      return res.data;
    },
    tagEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.editTag(args);
      return res.data;
    },
    tagDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.deleteTag(args);
      return res.data;
    },
  },
};

export default tagResolver;
