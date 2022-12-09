import { readFile } from 'fs/promises';

import express from 'express';
import { ApolloServer, IResolvers } from 'apollo-server-express';
import { expressjwt } from 'express-jwt';

import typeDefs from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';
import { JwtPayload, RequestContext } from './types';

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
    context: ({ req }): RequestContext => {
      const payload: JwtPayload | undefined = (req as any).auth;
      const user = payload
        ? { id: payload.sub, email: payload.email }
        : undefined;
      const { authorization } = req.headers;
      return { authorization, user };
    },
  });
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ host: '0.0.0.0', port: '5000' }, () => {
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
  });
}
