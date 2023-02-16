import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { GraphQLError } from 'graphql';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';
import context from './context';

startServer();

export async function startServer() {
  const app = express();

  // CORS configuration
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

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

  app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 1 }));

  server.applyMiddleware({ app, cors: corsOptions });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
  });
}
