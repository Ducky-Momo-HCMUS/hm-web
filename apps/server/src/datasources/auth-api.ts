import { DataSourceResponse } from '../types';
import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

export interface LoginDTO {
  token: string;
}

export default class AuthAPI extends BaseDataSource {
  constructor(baseUrl: string = BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async login(email: string, password: string) {
    try {
      const response = await this.post<DataSourceResponse<LoginDTO>>(
        '/v1/login',
        { email, password }
      );
      return response;
    } catch (error) {
      // TODO add log
      throw this.handleError(error);
    }
  }
}
