import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';

const app = express();
startServer();

export function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers, dataSources });
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
  });
}
