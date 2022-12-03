/* eslint-disable no-console */
import { ApolloError } from 'apollo-server-express';

import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class HomeroomAPI extends BaseDataSource {
  public baseURL = BASE_URL;

  public async getHomeroomList(accessToken: string) {
    try {
      const homeroomList = await this.get('/v1/homerooms', {
        headers: this.getHeaders(accessToken),
      });
      return homeroomList;
    } catch (error) {
      console.error('Error: cannot fetch books');
      return await this.handleError(error as ApolloError);
    }
  }

  private getHeaders(accessToken: string) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
}

export default HomeroomAPI;
