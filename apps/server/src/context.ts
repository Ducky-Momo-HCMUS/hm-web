import { IncomingHttpHeaders } from 'http';

import { ExpressContext } from 'apollo-server-express';
import { ApolloError, AuthenticationError } from 'apollo-server-errors';

import { ACCOUNT_BASE_URL } from './utils/config';

import type { DataSourceResponse, JwtPayload, RolesContext } from './types';

async function getAccount(id: string, headers: IncomingHttpHeaders) {
  return fetch(`${ACCOUNT_BASE_URL}/v1/accounts/${id}`, {
    headers: <HeadersInit>headers,
  });
}

async function parseResponse(
  response: Response
): Promise<DataSourceResponse<RolesContext>> {
  if (response.ok) {
    return response.json();
  }
  const { status } = response;
  if (status >= 500) {
    throw new ApolloError('Internal Server Error');
  } else {
    throw new AuthenticationError('Invalid user');
  }
}

export default async function context({ req }: ExpressContext) {
  const { authorization } = req.headers;
  // From express-jwt
  const payload: JwtPayload | undefined = (req as any).auth;
  if (!payload) {
    return {};
  }
  const { sub: id, email } = payload;
  const res = await getAccount(id, req.headers);
  const account = await parseResponse(res);
  const { data } = account;
  const { admin, gvcn, gvu } = data;
  return {
    authorization,
    user: {
      id,
      email,
      admin,
      gvcn,
      gvu,
    },
  };
}
