/* eslint-disable no-param-reassign */
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';

import { RequestContext, RolesContext } from '../types';

import { getACL } from './access-control';

export class BaseDataSource extends RESTDataSource<RequestContext> {
  protected override willSendRequest(req: RequestOptions) {
    // this.authorize(req);
    const { authorization } = this.context;
    if (authorization) {
      req.headers.set('Authorization', authorization);
    }
  }

  /**
   * Compare user role with access table
   * @throws default to ForbiddenError
   * @deprecated RBAC now handles on BE
   */
  private authorize(req: RequestOptions) {
    const { authorization, user } = this.context;
    const acl = getACL(req.path, req.method);
    if (!authorization || !user) {
      if (!acl.anonymous) {
        this.onUnauthorized(req);
        return;
      }
      return;
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
      this.onUnauthorized(req);
    }
  }

  /**
   * @deprecated RBAC now handles on BE
   */
  protected onUnauthorized(req: RequestOptions) {
    const message = 'Insufficient role based permissions';
    // https://github.com/apollographql/apollo-server/blob/c8ebdc7162a419cc4d00a90041cefbf2951535b6/packages/apollo-datasource-rest/src/RESTDataSource.ts#L143-L150
    throw new ForbiddenError(message, {
      response: {
        url: req.path,
        status: 403,
        body: { errorId: 'forbidden', message },
      },
    });
  }

  /**
   * Modify the error
   * @param error
   */
  protected handleError(error: unknown) {
    // ApolloError has been replaced with GraphQLError in v4
    if (!(error instanceof ApolloError)) {
      // TODO add log
      return new ApolloError('Internal Server Error');
    }
    // Possible exeptions from RESTDataSource:
    // - AuthenticationError (401)
    // - ForbiddenError (403)
    // - ApolloError (>=300)
    const errorResponse = error.extensions?.response?.body;
    if (errorResponse?.message) {
      error.message = errorResponse.message;
    }
    return error;
  }
}
