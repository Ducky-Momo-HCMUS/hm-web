import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const noteResolver: Resolvers<ResolverContext> = {
  Query: {
    noteDetail: async (_, args, { dataSources }) => {
      return (await dataSources.noteAPI.getNoteDetail(args)) || null;
    },
  },
  Mutation: {
    noteAdd: async (_, args, { dataSources }) => {
      return (await dataSources.noteAPI.addNote(args)) || null;
    },
    noteEdit: async (_, args, { dataSources }) => {
      return (await dataSources.noteAPI.editNote(args)) || null;
    },
    noteDelete: async (_, args, { dataSources }) => {
      return (await dataSources.noteAPI.deleteNote(args)) || null;
    },
  },
};

export default noteResolver;
