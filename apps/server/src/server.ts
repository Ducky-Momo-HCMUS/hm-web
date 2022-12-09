import { readFile } from 'fs/promises';

import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
import { expressjwt } from 'express-jwt';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';

startServer();

export async function startServer() {
  const app = express();

  app.use(
    expressjwt({
      algorithms: ['ES256'],
      credentialsRequired: false,
      secret: await readFile('public.pem'),
    })
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as IResolvers,
    dataSources,
    context: ({ req }) => {
      const user = (req as any).user || null;
      return { user };
    },
  });
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
  });
}
