import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { DataSources } from '../datasources';
import { Resolvers, UploadDocumentResponse } from '../generated-types';
import { RequestContext } from '../types';

export interface ContextType extends RequestContext {
  dataSources: DataSources;
}

const resolvers: Resolvers<ContextType> = {
  UploadFile: GraphQLUpload,
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
  Mutation: {
    uploadDocument: async (_, args, { dataSources }) => {
      // TODO: get accessToken
      const accessToken = '12345';
      return (await dataSources.fileAPI.uploadDocument(
        args,
        accessToken
      )) as UploadDocumentResponse;
    },
  },
};

export { resolvers };
