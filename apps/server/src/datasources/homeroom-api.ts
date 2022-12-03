/* eslint-disable no-console */
import { ApolloError } from 'apollo-server-express';

import { HomeroomListItem } from '../generated-types';
import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class HomeroomAPI extends BaseDataSource {
  public baseURL = BASE_URL;

  public async getHomeroomList(accessToken: string) {
    try {
      // const homeroomList = await this.get('/v1/homerooms', {
      //   headers: this.getHeaders(accessToken),
      // });
      console.log('accessToken', accessToken);
      const homeroomList = [
        {
          name: '19clc5',
          type: 'Chương trình chất lượng cao',
          year: 2019,
          teacherId: 'GV001',
        },
        {
          name: '19clc6',
          type: 'Chương trình chất lượng cao',
          year: 2019,
          teacherId: 'GV001',
        },
        {
          name: '20clc3',
          type: 'Chương trình chất lượng cao',
          year: 2020,
          teacherId: 'GV005',
        },
        {
          name: '21clc4',
          type: 'Chương trình chất lượng cao',
          year: 2021,
          teacherId: 'GV005',
        },
      ] as HomeroomListItem[];
      return homeroomList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom list');
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
