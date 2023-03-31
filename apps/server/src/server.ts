import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { GraphQLError } from 'graphql';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';
import context from './context';
import { logger } from './utils/logger';

startServer();

export async function startServer() {
  const app = express();

  const server = new ApolloServer({
    uploads: false,
    typeDefs,
    resolvers: resolvers as IResolvers,
    dataSources,
    context,
    debug: true,
    formatError: (error: GraphQLError) => {
      const { extensions } = error;
      console.log('extensions', extensions);

      const code = extensions?.code;
      const stacktrace = extensions?.exception;
      delete extensions?.exception;
      if (stacktrace && code === 'INTERNAL_SERVER_ERROR') {
        logger.error(error.message, stacktrace);
      }
      const formattedError = {
        message: error.message,
        errorId: (extensions && code) || 'INTERNAL_SERVER_ERROR',
        details: extensions?.response?.body?.detail,
      };
      return formattedError;
    },
  });

  app.use(cors());

  app.use(graphqlUploadExpress({ maxFileSize: 5000000, maxFiles: 5 }));

  server.applyMiddleware({ app });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    logger.info('Server is live');
  });
}
