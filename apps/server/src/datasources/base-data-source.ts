/* eslint-disable no-param-reassign */
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';

import { RequestContext, RolesContext } from '../types';

import { getACL } from './access-table';

export class BaseDataSource extends RESTDataSource<RequestContext> {
  unauthorizedError: ApolloError = new ForbiddenError(
    'Insufficient role based permissions',
    {
      errorId: 'forbidden',
      message: 'Insufficient role based permissions',
    }
  );

  protected override willSendRequest(req: RequestOptions) {
    this.authorize(req);
    const { authorization } = this.context;
    if (authorization) {
      req.headers.set('Authorization', authorization);
    }
  }

  /**
   * Compare user role with access table
   * @throws default to ForbiddenError
   */
  private authorize(req: RequestOptions) {
    const { authorization, user } = this.context;
    const acl = getACL(req.path, req.method);
    if (!authorization || !user) {
      if (!acl.anonymous) {
        throw this.unauthorizedError;
      } else {
        return;
      }
    }
    const { admin, gvcn, gvu } = user;
    const userACL = {
      ...(admin && { admin }),
      ...(gvcn && { gvcn }),
      ...(gvu && { gvu }),
    };
    const roles = <Array<keyof RolesContext>>Object.keys(userACL);
    if (
      // User have no role
      roles.length === 0 ||
      // Permission mismatch
      !roles.some((role) => !!userACL[role] === !!acl[role])
    ) {
      throw this.unauthorizedError;
    }
  }

  // protected override didReceiveResponse(res, req) {
  //   const result =
  // }

  /**
   * Modify the error
   * @param error
   */
  protected handleError(error: unknown) {
    // ApolloError has been replaced with GraphQLError in v4
    if (!(error instanceof ApolloError)) {
      // TODO add log
      return new ApolloError('Internal Server Error', 'INTERNAL_SERVER_ERROR');
    }
    // Possible exeptions from RESTDataSource:
    // - AuthenticationError (401)
    // - ForbiddenError (403)
    // - ApolloError
    const errorResponse = error.extensions?.response?.body;
    if (errorResponse?.message) {
      error.message = errorResponse.message;
    }
    return error;
  }
}
