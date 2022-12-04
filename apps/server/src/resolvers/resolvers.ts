import { DataSources } from '../datasources';
import { Resolvers } from '../generated-types';
import { RequestContext } from '../types';

export interface ContextType extends RequestContext {
  dataSources: DataSources;
}

const resolvers: Resolvers<ContextType> = {
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

export { resolvers };
