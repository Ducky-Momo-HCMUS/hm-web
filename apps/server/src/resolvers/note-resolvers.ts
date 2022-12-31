import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const noteResolver: Resolvers<ResolverContext> = {
  Query: {
    noteDetail: async (_, args, { dataSources }) => {
      return (await dataSources.noteAPI.getNoteDetail(args)) || null;
    },
  },
};

export default noteResolver;
