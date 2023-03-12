import { ApolloError } from 'apollo-server-express';

import { QueryCourseListArgs } from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class CourseAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getCourseList({ page, size }: QueryCourseListArgs) {
    try {
      const res = await this.get(`v1/courses?page=${page}&size=${size}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch course list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default CourseAPI;
