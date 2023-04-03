import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const fileResolver: Resolvers<ResolverContext> = {
  UploadFile: GraphQLUpload,
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
