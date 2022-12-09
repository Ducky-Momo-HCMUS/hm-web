import { DataSources } from '../datasources';

const authResolvers = {
  Mutation: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: DataSources }
    ) => {
      const res = await dataSources.authAPI.login(email, password);
      return res.data;
    },
  },
};

export default authResolvers;
