import { ApolloError } from 'apollo-server-express';

import {
  MutationAccountActivateArgs,
  MutationAccountAddArgs,
  MutationAccountDeleteArgs,
  MutationAccountEditArgs,
  QueryAccountListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class AccountAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getAccountList({ page, size }: QueryAccountListArgs) {
    try {
      const res = await this.get(`v1/admin?page=${page}&size=${size}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch account list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addAccount({ payload }: MutationAccountAddArgs) {
    try {
      const res = await this.post('v1/admin/account', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot add new account');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editAccount({ payload }: MutationAccountEditArgs) {
    try {
      const res = await this.post('v1/admin/edit-role', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit account');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteAccount({ payload }: MutationAccountDeleteArgs) {
    try {
      const res = await this.post('v1/admin/deactivate', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot delete account');
      throw this.handleError(error as ApolloError);
    }
  }

  public async activateAccount({ payload }: MutationAccountActivateArgs) {
    try {
      const res = await this.post('v1/admin/activate', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot activate account');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default AccountAPI;
