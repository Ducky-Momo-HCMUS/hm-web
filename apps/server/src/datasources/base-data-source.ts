/* eslint-disable no-param-reassign */
import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server-express';

export class BaseDataSource<
  TContext = unknown
> extends RESTDataSource<TContext> {
  /**
   * Modify the error and rethrow it
   * @param error
   */
  protected handleError(error: unknown) {
    // ApolloError has been replaced with GraphQLError in v4
    if (!(error instanceof ApolloError)) {
      // TODO add log
      throw new ApolloError('Internal Server Error', 'INTERNAL_SERVER_ERROR');
    }
    // Possible exeptions from RESTDataSource:
    // - AuthenticationError (401)
    // - ForbiddenError (403)
    // - ApolloError
    const errorResponse = error.extensions?.response?.body;
    if (errorResponse?.message) {
      error.message = errorResponse.message;
    }
    throw error;
  }
}
