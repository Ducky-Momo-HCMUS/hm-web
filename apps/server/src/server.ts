import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';

const app = express();
startServer();

export function startServer() {
  const server = new ApolloServer({
    uploads: false,
    typeDefs,
    resolvers: resolvers as IResolvers,
    dataSources,
  });

  app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 1 }));

  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
  });
}
