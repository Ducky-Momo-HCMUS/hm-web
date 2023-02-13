import { ApolloError } from 'apollo-server-express';

import { QueryTeacherListArgs } from '../generated-types';
import { YEAR_LIST } from '../mocks/teacher';
import { SERVICES_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class TeacherAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getYearList() {
    try {
      // const res = await this.get('v1/school-years'`);
      return YEAR_LIST;
    } catch (error) {
      console.error('Error: cannot fetch year list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getTeacherList({ year }: QueryTeacherListArgs) {
    try {
      const teacherList = await this.get(`v1/teachers?school-year=${year}`);
      return teacherList;
    } catch (error) {
      console.error('Error: cannot fetch teacher list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getAllTeacherList() {
    try {
      const res = await this.get('v1/teachers/all');
      return res;
    } catch (error) {
      console.error('Error: cannot fetch all teacher list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default TeacherAPI;
