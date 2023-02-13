import { IncomingHttpHeaders } from 'http';

import fetch, { Response } from 'node-fetch';
import { ExpressContext } from 'apollo-server-express';
import { ApolloError, AuthenticationError } from 'apollo-server-errors';

import { SERVICES_BASE_URL } from './utils/config';

import type {
  DataSourceResponse,
  JwtPayload,
  RequestContext,
  RolesContext,
} from './types';

/**
 * @deprecated RBAC now handles on BE
 */
async function getAccount(id: string, headers: IncomingHttpHeaders) {
  return fetch(`${SERVICES_BASE_URL}/v1/accounts/${id}`, {
    headers: { Authorization: headers.authorization! },
  });
}

/**
 * @deprecated RBAC now handles on BE
 */
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

export default async function context({
  req,
}: ExpressContext): Promise<RequestContext> {
  const { authorization } = req.headers;
  // // From express-jwt
  // const payload: JwtPayload | undefined = (req as any).auth;
  // if (!payload) {
  //   return {};
  // }
  // const { sub: id, email } = payload;
  // const res = await getAccount(id, req.headers);
  // const account = await parseResponse(res);
  // const { data } = account;
  // const { admin, gvcn, gvu } = data;
  return {
    authorization,
    // user: {
    //   id,
    //   email,
    //   admin,
    //   gvcn,
    //   gvu,
    // },
  };
}
