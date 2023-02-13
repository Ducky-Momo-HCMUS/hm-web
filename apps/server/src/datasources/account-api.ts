import { ApolloError } from 'apollo-server-express';

import {
  MutationAccountAddArgs,
  MutationAccountDeleteArgs,
  MutationAccountEditArgs,
} from '../generated-types';
import { ACCOUNT_LIST } from '../mocks/account';
import { SERVICES_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class AccountAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getAccountList() {
    try {
      // const res = await this.get('v1/accounts');
      return ACCOUNT_LIST;
    } catch (error) {
      console.error('Error: cannot fetch account list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addAccount({ payload }: MutationAccountAddArgs) {
    try {
      // const res = await this.post('v1/accounts', payload);
      console.log('params', payload);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot add new account');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editAccount({ accountId, payload }: MutationAccountEditArgs) {
    try {
      // const res = await this.patch(`v1/accounts/${accountId}`, payload);
      console.log('params', accountId, payload);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot edit account');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteAccount({ accountId }: MutationAccountDeleteArgs) {
    try {
      // const res = await this.delete(`v1/accounts/${accountId}`);
      console.log('params', accountId);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot delete account');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default AccountAPI;
