import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const tagResolver: Resolvers<ResolverContext> = {
  Query: {
    tagList: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.getTagList(args);
      return res;
    },
  },
  Mutation: {
    tagAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.addTag(args);
      return res.data.tag;
    },
    tagEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.editTag(args);
      return res.data.tag;
    },
    tagDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.tagAPI.deleteTag(args);
      return res.data;
    },
  },
};

export default tagResolver;
