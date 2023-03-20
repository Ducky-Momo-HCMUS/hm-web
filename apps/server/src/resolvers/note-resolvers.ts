import { GraphQLScalarType } from 'graphql';

import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
});

export const noteResolver: Resolvers<ResolverContext> = {
  Date: dateScalar,
  Query: {
    noteDetail: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.getNoteDetail(args);
      return res.data;
    },
    noteSearch: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.searchNote(args);
      return res;
    },
  },
  NoteListItem: {
    sinhVien: async (parent, args, { dataSources }) => {
      if (!parent.maSV) return null;
      const res = await dataSources.studentAPI.getStudentDetail({
        studentId: parent.maSV || '',
      });

      return {
        tenSV: res.tenSV,
      };
    },
  },

  Mutation: {
    noteAdd: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.addNote(args);
      return res.data;
    },
    noteEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.editNote(args);
      return res.data;
    },
    noteDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.noteAPI.deleteNote(args);
      return res.data;
    },
  },
};

export default noteResolver;
