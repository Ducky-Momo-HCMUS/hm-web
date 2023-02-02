import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const accountResolver: Resolvers<ResolverContext> = {
  Query: {
    accountList: async (_, __, { dataSources }) => {
      const res = await dataSources.accountAPI.getAccountList();
      return res;
    },
  },
  Mutation: {
    accountAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.addAccount(args);
      return res;
    },
    accountEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.editAccount(args);
      return res;
    },
    accountDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.deleteAccount(args);
      return res;
    },
  },
};

export default accountResolver;
