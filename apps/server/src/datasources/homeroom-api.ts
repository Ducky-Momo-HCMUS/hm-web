import { ApolloError } from 'apollo-server-express';

import {
  HOMEROOM_DETAIL,
  HOMEROOM_FAIL_LIST_BY_TERM,
  HOMEROOM_NOT_ENROLLED_LIST_BY_TERM,
  HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM,
  HOMEROOM_TERM_LIST,
} from '../mocks/homeroom';
import {
  QueryHomeroomDetailArgs,
  QueryHomeroomFailListByTermArgs,
  QueryHomeroomNotEnrolledListByTermArgs,
  QueryHomeroomPostponeExamListByTermArgs,
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
      const homeroomList = await this.get('v1/homerooms');
      return homeroomList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomStudentList({
    homeroomId,
  }: QueryHomeroomStudentListArgs) {
    try {
      const homeroomStudentList = await this.get(
        `v1/homerooms/${homeroomId}/students`
      );
      return homeroomStudentList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom student list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomDetail({ homeroomId }: QueryHomeroomDetailArgs) {
    try {
      // const homeroomDetail = await this.get(
      //   'v1/homerooms/:id',
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId);
      return HOMEROOM_DETAIL;
    } catch (error) {
      console.error('Error: cannot fetch homeroom detail');
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

  public async getHomeroomFailListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomFailListByTermArgs) {
    try {
      // const homeroomFailList = await this.get(
      //   `v1/homerooms/:id/fail?term=${term}`,
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_FAIL_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom fail list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomNotEnrolledListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomNotEnrolledListByTermArgs) {
    try {
      // const homeroomNotEnrolledList = await this.get(
      //   `/v1/homerooms/:id/not-enrolled?term=${term}`,
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_NOT_ENROLLED_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom not enrolled list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomPostponeExamListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomPostponeExamListByTermArgs) {
    try {
      // const homeroomPostponeExamList = await this.get(
      //   `v1/homerooms/:id/postpone-exam?term=${term}`,
      //   {
      //     id: homeroomId,
      //   },
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom postpone exam list by term');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default HomeroomAPI;
