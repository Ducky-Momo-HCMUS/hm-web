import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { MSG_ERROR_DEFAULT } from '../constants/texts';

export const apolloErrors = [
  'SyntaxError',
  'ValidationError',
  'UserInputError',
  'AuthenticationError',
  'ForbiddenError',
  'PersistedQueryNotFoundError',
  'PersistedQueryNotSupportedError',
];

export class BaseDataSource<
  TContext = unknown
> extends RESTDataSource<TContext> {
  public async handleError(error: ApolloError): Promise<never> {
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
