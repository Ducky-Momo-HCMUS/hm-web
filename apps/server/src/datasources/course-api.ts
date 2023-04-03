/* eslint-disable prefer-object-spread */
import { ApolloError } from 'apollo-server-express';

import {
  MutationCourseEditArgs,
  QueryCourseListArgs,
  MutationMajorEditArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class CourseAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async editCourse({ courseId, payload }: MutationCourseEditArgs) {
    try {
      const res = await this.patch(`v1/courses/${courseId}`, payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit course');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editMajor({ majorId, payload }: MutationMajorEditArgs) {
    try {
      const res = await this.patch(`v1/majors/${majorId}`, payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit major');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getCourseList({ page, size }: QueryCourseListArgs) {
    const params = new URLSearchParams({
      page: page?.toString(),
      size: size?.toString(),
    } as Record<string, string>);

    try {
      const res = await this.get(`v1/courses?${params}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch course list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getMajorList({ page, size }: QueryCourseListArgs) {
    const params = new URLSearchParams({
      page: page?.toString(),
      size: size?.toString(),
    } as Record<string, string>);

    try {
      const res = await this.get(`v1/majors?${params}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch major list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getMajorResultList({ page, size }: QueryCourseListArgs) {
    const params = new URLSearchParams({
      page: page?.toString(),
      size: size?.toString(),
    } as Record<string, string>);

    try {
      const res = await this.get(`v1/majors/students?${params}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch major result list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default CourseAPI;
