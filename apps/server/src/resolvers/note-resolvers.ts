import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const noteResolver: Resolvers<ResolverContext> = {
  Query: {
    noteDetail: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.getNoteDetail(args);
      return res.data.note;
    },
    noteList: async (_, __, { dataSources }) => {
      const res = await dataSources.noteAPI.getNoteList();
      return res.data;
    },
  },
  Mutation: {
    noteAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.addNote(args);
      return res.data.note;
    },
    noteEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.editNote(args);
      return res.data.note;
    },
    noteDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.deleteNote(args);
      return res.data;
    },
  },
};

export default noteResolver;
