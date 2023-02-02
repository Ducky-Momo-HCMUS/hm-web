import { ApolloError } from 'apollo-server-express';

import {
  HOMEROOM_DETAIL,
  HOMEROOM_EXAM_ABSENT_LIST_BY_TERM,
  HOMEROOM_EXAM_POSTPONED_LIST_BY_TERM,
  HOMEROOM_FAIL_LIST_BY_TERM,
  HOMEROOM_FINAL_RESULT_LIST_BY_TERM,
  HOMEROOM_NOT_ENROLLED_LIST_BY_TERM,
  HOMEROOM_OVERVIEW_REPORT_BY_TERM,
  HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM,
  HOMEROOM_TERM_LIST,
} from '../mocks/homeroom';
import {
  QueryHomeroomDetailArgs,
  QueryHomeroomExamAbsentListByTermArgs,
  QueryHomeroomExamPostponedListByTermArgs,
  QueryHomeroomFailListByTermArgs,
  QueryHomeroomFinalResultListByTermArgs,
  QueryHomeroomNotEnrolledListByTermArgs,
  QueryHomeroomOverviewReportByTermArgs,
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
      // const homeroomDetail = await this.get(`v1/homerooms/${homeroomId}`);
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
      //   `v1/homerooms/${homeroomId}/terms`
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
      //   `v1/homerooms/${homeroomId}/fail`,
      //   {
      //     term,
      //   }
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
      //   `/v1/homerooms/${homeroomId}/not-enrolled`,
      //   { term }
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
      //   `v1/homerooms/${homeroomId}/postpone-exam`,
      //   { term }
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM;
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
      // const homeroomExamAbsentList = await this.get(
      //   `v1/homerooms/${homeroomId}/absent`,
      //   {
      //     term,
      //   }
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_EXAM_ABSENT_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom exam absent list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomExamPostponedListByTerm({
    homeroomId,
    term,
  }: QueryHomeroomExamPostponedListByTermArgs) {
    try {
      // const homeroomExamPostponedList = await this.get(
      //   `v1/homerooms/${homeroomId}/postpone-exam`,
      //   {
      //     term,
      //   }
      // );
      console.log('params', homeroomId, term);
      return HOMEROOM_EXAM_POSTPONED_LIST_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch homeroom exam postponed list by term');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default HomeroomAPI;
