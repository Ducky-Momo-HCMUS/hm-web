import { MutationEditPasswordArgs } from '../generated-types';
import { DataSourceResponse, MutationStatusReponse } from '../types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

export interface LoginDTO {
  token: string;
}

export default class AuthAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async login(email: string, password: string) {
    try {
      const response = await this.post<DataSourceResponse<LoginDTO>>(
        'v1/login',
        { email, password }
      );
      return response;
    } catch (error) {
      logger.error('Error: cannot login');
      throw this.handleError(error);
    }
  }

  public async forgotPassword(email: string) {
    try {
      const response = await this.post<MutationStatusReponse>(
        'v1/forgot-password',
        { email }
      );
      return response;
    } catch (error) {
      logger.error('Error: cannot get reset password link');
      throw this.handleError(error);
    }
  }

  public async resetPassword(
    id: number,
    token: string,
    password: string,
    passwordConfirm: string
  ) {
    try {
      const response = await this.post<MutationStatusReponse>(
        'v1/reset-password',
        { id, token, password, passwordConfirm }
      );
      return response;
    } catch (error) {
      logger.error('Error: cannot reset password');
      throw this.handleError(error);
    }
  }

  public async editPassword({
    email,
    password,
    newPassword,
    passwordConfirm,
  }: MutationEditPasswordArgs) {
    try {
      const response = await this.post<MutationStatusReponse>(
        'v1/accounts/edit-password',
        { email, password, newPassword, passwordConfirm }
      );
      return response;
    } catch (error) {
      logger.error('Error: cannot change password');
      throw this.handleError(error);
    }
  }
}
