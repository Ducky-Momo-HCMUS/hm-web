import { ApolloError } from 'apollo-server-express';

import {
  HOMEROOM_FAIL_LIST,
  HOMEROOM_LIST,
  HOMEROOM_NOT_ENROLLED_LIST,
  HOMEROOM_POSTPONE_EXAM_LIST,
  HOMEROOM_STUDENT_LIST,
  HOMEROOM_TERM_LIST,
} from '../mocks/homeroom';
import {
  QueryHomeroomFailListArgs,
  QueryHomeroomNotEnrolledListArgs,
  QueryHomeroomPostponeExamListArgs,
  QueryHomeroomStudentListArgs,
  QueryHomeroomTermListArgs,
} from '../generated-types';
import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class HomeroomAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getHomeroomList() {
    try {
      // const homeroomList = await this.get('v1/homerooms');
      return HOMEROOM_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomStudentList({
    homeroomId,
  }: QueryHomeroomStudentListArgs) {
    try {
      // const homeroomStudentList = await this.get(
      //   'v1/homerooms/:id/students',
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId);
      return HOMEROOM_STUDENT_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom student list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomTermList({ homeroomId }: QueryHomeroomTermListArgs) {
    try {
      // const homeroomTermList = await this.get(
      //   'v1/homerooms/:id/terms',
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId);
      return HOMEROOM_TERM_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom term list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomFailList({
    homeroomId,
    term,
  }: QueryHomeroomFailListArgs) {
    try {
      // const homeroomFailList = await this.get(
      //   `v1/homerooms/:id/fail?term=${term}`,
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_FAIL_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom fail list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomNotEnrolledList({
    homeroomId,
    term,
  }: QueryHomeroomNotEnrolledListArgs) {
    try {
      // const homeroomNotEnrolledList = await this.get(
      //   `/v1/homerooms/:id/not-enrolled?term=${term}`,
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_NOT_ENROLLED_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom not enrolled list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomPostponeExamList({
    homeroomId,
    term,
  }: QueryHomeroomPostponeExamListArgs) {
    try {
      // const homeroomPostponeExamList = await this.get(
      //   `v1/homerooms/:id/postpone-exam?term=${term}`,
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_POSTPONE_EXAM_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom postpone exam list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default HomeroomAPI;
