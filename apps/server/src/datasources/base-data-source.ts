/* eslint-disable no-param-reassign */
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server-express';

import { RequestContext } from '../types';

export class BaseDataSource extends RESTDataSource<RequestContext> {
  protected override willSendRequest(req: RequestOptions) {
    const { authorization } = this.context;
    if (authorization) {
      req.headers.set('Authorization', authorization);
    }
  }

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
