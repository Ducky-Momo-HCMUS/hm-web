import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError, UserInputError } from 'apollo-server-express';

export const apolloErrors = [
  'SyntaxError',
  'ValidationError',
  'UserInputError',
  'AuthenticationError',
  'ForbiddenError',
  'PersistedQueryNotFoundError',
  'PersistedQueryNotSupportedError',
];

const MSG_ERROR_DEFAULT = 'Something went wrong...';

export class BaseDataSource<
  TContext = unknown
> extends RESTDataSource<TContext> {
  protected handleError(error: ApolloError): Promise<never> {
    if (
      error.extensions &&
      error.extensions.response &&
      error.extensions.response.body
    ) {
      throw new UserInputError(
        error.extensions.response.body.message || MSG_ERROR_DEFAULT
      );
    }

    if (apolloErrors.includes(error.name)) {
      throw error;
    }

    throw new ApolloError('Internal Server Error');
  }
}
