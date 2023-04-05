/* eslint-disable no-nested-ternary */
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { GraphQLScalarType, Kind } from 'graphql';

import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

const ObjectScalarType = new GraphQLScalarType({
  name: 'CustomObject',
  description: 'Arbitrary object',
  parseValue: (value) => {
    return typeof value === 'object'
      ? value
      : typeof value === 'string'
      ? JSON.parse(value)
      : null;
  },
  serialize: (value) => {
    return typeof value === 'object'
      ? value
      : typeof value === 'string'
      ? JSON.parse(value)
      : null;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
        return JSON.parse(ast.value);
      case Kind.OBJECT:
        throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
      default:
        return null;
    }
  },
});

export const fileResolver: Resolvers<ResolverContext> = {
  UploadFile: GraphQLUpload,
  CustomObject: ObjectScalarType,
  Query: {
    termList: async (_, __, { dataSources }) => {
      const res = await dataSources.fileAPI.getTermList();
      return res.data;
    },
    importHistory: async (_, args, { dataSources }) => {
      const res = await dataSources.fileAPI.getImportHistory(args);
      return res.data;
    },
    importStatusHistory: async (_, args, { dataSources }) => {
      const res = await dataSources.fileAPI.getImportStatusHistory(args);
      return res.data;
    },
    columnHeaderList: async (_, args, { dataSources }) => {
      const res = await dataSources.fileAPI.getColumnHeaderList(args);
      return res.data.headers;
    },
  },
  Mutation: {
    uploadDocument: async (_, args, { dataSources }) => {
      return (await dataSources.fileAPI.uploadDocument(args)) || null;
    },
  },
};

export default fileResolver;
