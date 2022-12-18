import { IncomingHttpHeaders } from 'http';

import { ExpressContext } from 'apollo-server-express';
import { ApolloError } from 'apollo-server-errors';

import { BASE_URL } from './utils/config';

import type {
  DataSourceGenericResponse,
  DataSourceResponse,
  JwtPayload,
  RolesContext,
} from './types';

async function getAccount(id: string, headers: IncomingHttpHeaders) {
  return fetch(`${BASE_URL}/v1/accounts${id}`, {
    headers: <HeadersInit>headers,
  });
}

async function parseResponse(
  response: Response
): Promise<DataSourceResponse<RolesContext>> {
  const { status } = response;
  if (status === 500) {
    throw new ApolloError('Bad Gateway', '502');
  }
  const body: DataSourceGenericResponse<RolesContext> = await response.json();
  // const { errorId } = body;
  // if (errorId) {
  //   // TODO add log
  //   throw new AuthenticationError(
  //     `Cannot find account with ${payload?.email}`,
  //     accountOrError
  //   );
  // }
  return <DataSourceResponse<RolesContext>>body;
}

export default async function context({ req }: ExpressContext) {
  throw new ApolloError('Bad Gateway', '502');
  // const { authorization } = req.headers;
  // // From express-jwt
  // const payload: JwtPayload | undefined = (req as any).auth;
  // if (!payload) {
  //   return { authorization };
  // }
  // const { sub: id, email } = payload;
  // const res = await getAccount(id, req.headers);
  // const account = await parseResponse(res);
  // const { data } = account;
  // const { admin, gvcn, gvu } = data;
  // return {
  //   authorization,
  //   user: {
  //     id,
  //     email,
  //     admin,
  //     gvcn,
  //     gvu,
  //   },
  // };
}
