import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const authResolvers: Resolvers<ResolverContext> = {
  Mutation: {
    login: async (_parent, { email, password }, { dataSources }) => {
      const res = await dataSources.authAPI.login(email, password);
      return { token: res.data.token };
    },
    forgotPassword: async (_parent, { email }, { dataSources }) => {
      const res = await dataSources.authAPI.forgotPassword(email);
      return { status: res.data.status };
    },
    resetPassword: async (
      _parent,
      { id, token, password, passwordConfirm },
      { dataSources }
    ) => {
      const res = await dataSources.authAPI.resetPassword(
        id,
        token,
        password,
        passwordConfirm
      );
      return { status: res.data.status };
    },
    editPassword: async (
      _parent,
      { email, password, newPassword, passwordConfirm },
      { dataSources }
    ) => {
      const res = await dataSources.authAPI.editPassword({
        email,
        password,
        newPassword,
        passwordConfirm,
      });
      return { status: res.data.status };
    },
  },
};
