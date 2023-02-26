import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
// import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { GraphQLError } from 'graphql';
import cors from 'cors';
import morgan from 'morgan';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';
import context from './context';

startServer();

export async function startServer() {
  const app = express();

  const server = new ApolloServer({
    uploads: false,
    typeDefs,
    resolvers: resolvers as IResolvers,
    dataSources,
    context,
    formatError: (error: GraphQLError) => {
      const formattedError = {
        message: error.message,
        errorId:
          (error.extensions && error.extensions.code) ||
          'INTERNAL_SERVER_ERROR',
      };

      return formattedError;
    },
  });

  app.use(cors());
  app.use(morgan('tiny'));

  // app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 1 }));

  server.applyMiddleware({ app });
  app.listen({ host: '0.0.0.0', port: '5000' });
}
