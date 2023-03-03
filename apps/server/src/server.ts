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
      console.log(JSON.stringify(error));
      const formattedError = {
        message: error.message,
        errorId:
          (error.extensions && error.extensions.code) ||
          'INTERNAL_SERVER_ERROR',
      };
      return formattedError;
    },
    plugins: [
      {
        requestDidStart(requestContext) {
          console.log(
            `Request started! Query:\n${requestContext.request.query}`
          );
          return {
            // Fires whenever Apollo Server will parse a GraphQL
            // request to create its associated document AST.
            parsingDidStart(requestContext) {
              console.log('Parsing started!');
            },

            // Fires whenever Apollo Server will validate a
            // request's document AST against your GraphQL schema.
            validationDidStart(requestContext) {
              console.log('Validation started!');
            },
          };
        },
      },
    ],
  });

  app.use(cors());

  app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 1 }));

  server.applyMiddleware({ app });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    logger.info('Server is live');
  });
}
