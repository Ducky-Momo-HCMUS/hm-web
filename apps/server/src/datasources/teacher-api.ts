import { ApolloError } from 'apollo-server-express';

import { QueryTeacherListArgs } from '../generated-types';
import { TEACHER_LIST } from '../mocks/teacher';
import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class TeacherAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getTeacherList({ year }: QueryTeacherListArgs) {
    try {
      // const res = await this.get(`v1/teachers?school-year=${year}`);
      console.log('params', year);
      return TEACHER_LIST;
    } catch (error) {
      console.error('Error: cannot fetch teacher list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default TeacherAPI;
