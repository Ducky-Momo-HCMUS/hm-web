/* eslint-disable prefer-object-spread */
import { ApolloError } from 'apollo-server-express';

import {
  QueryClassroomListArgs,
  QueryClassroomScoreListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class ClassroomAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getClassroomList({ termId, subjectId }: QueryClassroomListArgs) {
    const args = Object.assign(
      {},
      termId && { termId },
      subjectId && { subjectId }
    );
    let queryString = '';
    Object.keys(args).forEach((arg, index) => {
      queryString += `${arg}=${args[arg]}`;

      if (index !== Object.keys(args).length - 1) {
        queryString += '&';
      }
    });
    try {
      const res = await this.get(
        `v1/classrooms${queryString ? `?${queryString}` : ''}`
      );
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch classroom list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getClassroomScoreList({
    id,
    termId,
    page,
    size,
  }: QueryClassroomScoreListArgs) {
    try {
      const res = await this.get(
        `v1/classrooms/${id}/scores?termId=${termId}&page=${page}&size=${size}`
      );
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch classroom score list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default ClassroomAPI;
