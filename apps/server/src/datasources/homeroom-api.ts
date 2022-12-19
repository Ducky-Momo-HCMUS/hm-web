import { ApolloError } from 'apollo-server-express';

import { HOMEROOM_LIST, HOMEROOM_STUDENT_LIST } from '../mocks/homeroom';
import { QueryHomeroomStudentListArgs } from '../generated-types';
import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class HomeroomAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getHomeroomList(accessToken: string) {
    try {
      // const homeroomList = await this.get('/v1/homerooms', {
      //   headers: this.getHeaders(accessToken),
      // });
      console.log('accessToken', accessToken);
      return HOMEROOM_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomStudentList(
    { homeroomId }: QueryHomeroomStudentListArgs,
    accessToken: string
  ) {
    try {
      // const homeroomStudentList = await this.get(
      //   '/v1/homerooms/:id/students',
      //   {
      //     id: homeroomId,
      //   },
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('accessToken', accessToken, homeroomId);
      return HOMEROOM_STUDENT_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom student list');
      throw this.handleError(error as ApolloError);
    }
  }

  private getHeaders(accessToken: string) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
}

export default HomeroomAPI;
