import { ApolloError } from 'apollo-server-express';

import { DataSourceResponse } from '../types';
import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

export interface LoginResponse extends DataSourceResponse {
  data: {
    token: string;
  };
}

export default class AuthAPI extends BaseDataSource {
  constructor(baseUrl: string = BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async login(email: string, password: string): Promise<LoginResponse> {
    try {
      return await this.post('/v1/login', { email, password });
    } catch (error) {
      this.handleError(error);
    }
  }
}
