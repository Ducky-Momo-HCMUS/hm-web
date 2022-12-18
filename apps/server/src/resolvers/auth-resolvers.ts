import { DataSources } from '../datasources';
import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const authResolvers: Resolvers<ResolverContext> = {
  Mutation: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: DataSources }
    ) => {
      const res = await dataSources.authAPI.login(email, password);
      return { code: 'OK', success: true, token: res.data.token };
    },
  },
};
