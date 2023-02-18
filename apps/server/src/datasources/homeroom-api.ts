import { ApolloError } from 'apollo-server-express';

import {
  HOMEROOM_ALL_LIST,
  HOMEROOM_FINAL_RESULT_LIST_BY_TERM,
  HOMEROOM_OVERVIEW_REPORT_BY_TERM,
} from '../mocks/homeroom';
import {
  QueryHomeroomDetailArgs,
  QueryHomeroomExamAbsentListByTermArgs,
  QueryHomeroomFailListByTermArgs,
  QueryHomeroomFinalResultListByTermArgs,
  QueryHomeroomNotEnrolledListByTermArgs,
  QueryHomeroomOverviewReportByTermArgs,
  QueryHomeroomPostponeExamListByTermArgs,
  QueryHomeroomStudentListArgs,
  QueryHomeroomTermListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class HomeroomAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
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

  public async getHomeroomAllList() {
    try {
      // const homeroomAllList = await this.get('v1/homerooms-list');
      return HOMEROOM_ALL_LIST;
    } catch (error) {
      console.error('Error: cannot fetch homeroom all list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomStudentList({
    homeroomId,
    page,
    size,
  }: QueryHomeroomStudentListArgs) {
    try {
      const homeroomStudentList = await this.get(
        `v1/homerooms/${homeroomId}/students?page=${page}&size=${size}`
      );
      return homeroomStudentList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom student list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomDetail({ homeroomId }: QueryHomeroomDetailArgs) {
    try {
      const homeroomDetail = await this.get(`v1/homerooms/${homeroomId}`);
      return homeroomDetail;
    } catch (error) {
      console.error('Error: cannot fetch homeroom detail');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomTermList({ homeroomId }: QueryHomeroomTermListArgs) {
    try {
      const homeroomTermList = await this.get(
        `v1/homerooms/${homeroomId}/terms`
      );
      return homeroomTermList;
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
      const homeroomFailList = await this.get(
        `v1/homerooms/${homeroomId}/fail`,
        {
          term,
        }
      );
      return homeroomFailList;
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
      const homeroomNotEnrolledList = await this.get(
        `/v1/homerooms/${homeroomId}/not-enrolled`,
        { term }
      );
      return homeroomNotEnrolledList;
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
      const homeroomPostponeExamList = await this.get(
        `v1/homerooms/${homeroomId}/postpone-exam`,
        { term }
      );
      return homeroomPostponeExamList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom postpone exam list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomOverviewReportByTerm({
    homeroomId,
    term,
  }: QueryHomeroomOverviewReportByTermArgs) {
    try {
      // const homeroomOverviewReport = await this.get(
      //   `v1/homerooms/${homeroomId}/report`,
      //   {
      //     term,
      //   }
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_OVERVIEW_REPORT_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom overview report by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomFinalResultListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomFinalResultListByTermArgs) {
    try {
      // const homeroomFinalResultList = await this.get(
      //   `v1/homerooms/${homeroomId}/score`,
      //   {
      //     term,
      //   }
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_FINAL_RESULT_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom final result list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomExamAbsentListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomExamAbsentListByTermArgs) {
    try {
      const homeroomExamAbsentList = await this.get(
        `v1/homerooms/${homeroomId}/absent`,
        {
          term,
        }
      );
      return homeroomExamAbsentList;
    } catch (error) {
      console.error('Error: cannot fetch homeroom exam absent list by term');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default HomeroomAPI;
