import { ApolloError } from 'apollo-server-express';

import {
  MutationHomeroomAddWatchlistArgs,
  MutationHomeroomDeleteWatchlistArgs,
  QueryHomeroomDetailArgs,
  QueryHomeroomExamAbsentListByTermArgs,
  QueryHomeroomFailListByTermArgs,
  QueryHomeroomFinalResultListByTermArgs,
  QueryHomeroomNotEnrolledListByTermArgs,
  QueryHomeroomOverviewReportByTermArgs,
  QueryHomeroomPostponeExamListByTermArgs,
  QueryHomeroomReportDetailByTermArgs,
  QueryHomeroomStudentListArgs,
  QueryHomeroomTermListArgs,
  QueryHomeroomWatchListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

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
      logger.error('Error: cannot fetch homeroom list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomAllList() {
    try {
      const homeroomAllList = await this.get('v1/homerooms/all');
      return homeroomAllList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom all list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomStudentList({
    homeroomId,
    page,
    size,
    sortOrder,
    sortBy,
    unruly,
  }: QueryHomeroomStudentListArgs) {
    try {
      let queryString = `v1/homerooms/${homeroomId}/students?page=${page}&size=${size}&sortOrder=${sortOrder}&sortBy=${sortBy}`;
      if (unruly) {
        queryString += '&gpa10Max=5.0&riskyStatus&op=$or';
      }
      const homeroomStudentList = await this.get(queryString);
      return homeroomStudentList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom student list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomWatchList({
    homeroomId,
    page,
    size,
    sortOrder,
    sortBy,
  }: QueryHomeroomWatchListArgs) {
    try {
      const homeroomStudentList = await this.get(
        `v1/homerooms/${homeroomId}/watchlist?page=${page}&size=${size}&sortOrder=${sortOrder}&sortBy=${sortBy}`
      );
      return homeroomStudentList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom watch list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomDetail({ homeroomId }: QueryHomeroomDetailArgs) {
    try {
      const homeroomDetail = await this.get(`v1/homerooms/${homeroomId}`);
      return homeroomDetail;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom detail');
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
      logger.error('Error: cannot fetch homeroom term list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomFailListByTerm({
    homeroomId,
    term,
    page,
    size,
  }: QueryHomeroomFailListByTermArgs) {
    try {
      const homeroomFailList = await this.get(
        `v1/homerooms/${homeroomId}/fail?term=${term}&page=${page}&size=${size}`
      );
      return homeroomFailList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom fail list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomNotEnrolledListByTerm({
    homeroomId,
    term,
    page,
    size,
  }: QueryHomeroomNotEnrolledListByTermArgs) {
    try {
      const homeroomNotEnrolledList = await this.get(
        `/v1/homerooms/${homeroomId}/not-enrolled?term=${term}&page=${page}&size=${size}`
      );
      return homeroomNotEnrolledList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom not enrolled list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomPostponeExamListByTerm({
    homeroomId,
    term,
    page,
    size,
  }: QueryHomeroomPostponeExamListByTermArgs) {
    try {
      const homeroomPostponeExamList = await this.get(
        `v1/homerooms/${homeroomId}/postpone-exam?term=${term}&page=${page}&size=${size}`
      );
      return homeroomPostponeExamList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom postpone exam list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomOverviewReportByTerm({
    homeroomId,
    term,
  }: QueryHomeroomOverviewReportByTermArgs) {
    try {
      const homeroomOverviewReport = await this.get(
        `v1/homerooms/${homeroomId}/report?term=${term}`
      );
      return homeroomOverviewReport;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom overview report by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomFinalResultListByTerm({
    homeroomId,
    term,
    page,
    size,
  }: QueryHomeroomFinalResultListByTermArgs) {
    try {
      const homeroomFinalResultList = await this.get(
        `v1/homerooms/${homeroomId}/score?term=${term}&page=${page}&size=${size}`
      );
      return homeroomFinalResultList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom final result list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomExamAbsentListByTerm({
    homeroomId,
    term,
    page,
    size,
  }: QueryHomeroomExamAbsentListByTermArgs) {
    try {
      const homeroomExamAbsentList = await this.get(
        `v1/homerooms/${homeroomId}/absent?term=${term}&page=${page}&size=${size}`
      );
      return homeroomExamAbsentList;
    } catch (error) {
      logger.error('Error: cannot fetch homeroom exam absent list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getHomeroomReportDetail({
    homeroomId,
    term,
  }: QueryHomeroomReportDetailByTermArgs) {
    try {
      const homeroomOverviewReport = await this.get(
        `v1/homerooms/${homeroomId}/report?term=${term}`
      );
      const homeroomExamAbsentList = await this.get(
        `v1/homerooms/${homeroomId}/absent?term=${term}`
      );
      const homeroomFinalResultList = await this.get(
        `v1/homerooms/${homeroomId}/score?term=${term}`
      );
      const homeroomPostponeExamList = await this.get(
        `v1/homerooms/${homeroomId}/postpone-exam?term=${term}`
      );

      return {
        overviewReport: homeroomOverviewReport.data,
        examAbsent: homeroomExamAbsentList.data,
        finalResult: homeroomFinalResultList.data,
        examPostpone: homeroomPostponeExamList.data,
      };
    } catch (error) {
      logger.error('Error: cannot fetch homeroom exam absent list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addHomeroomWatchlist({
    payload,
  }: MutationHomeroomAddWatchlistArgs) {
    try {
      const res = await this.post('v1/watchlist', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot add student to homeroom watchlist');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteHomeroomWatchlist({
    payload,
  }: MutationHomeroomDeleteWatchlistArgs) {
    try {
      const res = await this.patch('v1/watchlist', payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot remove student from homeroom watchlist');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default HomeroomAPI;
