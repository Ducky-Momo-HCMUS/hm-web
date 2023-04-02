import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const accountResolver: Resolvers<ResolverContext> = {
  Query: {
    accountList: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.getAccountList(args);
      return res.data;
    },
  },
  Mutation: {
    accountAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.addAccount(args);
      return res.data;
    },
    accountEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.editAccount(args);
      return res.data;
    },
    accountDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.deleteAccount(args);
      return res.data;
    },
    accountActivate: async (_, args, { dataSources }) => {
      const res = await dataSources.accountAPI.activateAccount(args);
      return res.data;
    },
  },
};

export default accountResolver;
