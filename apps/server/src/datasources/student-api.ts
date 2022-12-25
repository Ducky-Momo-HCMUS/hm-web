import { ApolloError } from 'apollo-server-express';

import {
  QueryStudentAllSubjectsArgs,
  QueryStudentAllTermsArgs,
  QueryStudentAveragePointArgs,
  QueryStudentAveragePointByTermArgs,
  QueryStudentSubjectsByTermArgs,
  QueryStudentTrainingPointArgs,
  QueryStudentTrainingPointByTermArgs,
} from '../generated-types';
import {
  ALL_SUBJECTS,
  ALL_TERMS,
  AVERAGE_POINT,
  AVERAGE_POINT_BY_TERM,
  SUBJECTS_BY_TERM,
  TRAINING_POINT,
  TRAINING_POINT_BY_TERM,
} from '../mocks/student';
import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class StudentAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getStudentSubjectsByTerm(
    { studentId, term }: QueryStudentSubjectsByTermArgs,
    accessToken: string
  ) {
    try {
      // const subjectList = await this.get(
      //   `/v1/students/${studentId}/subjects?term=${term}`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId, term);
      return SUBJECTS_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch subject list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllSubjects(
    { studentId }: QueryStudentAllSubjectsArgs,
    accessToken: string
  ) {
    try {
      // const subjectList = await this.get(
      //   `/v1/students/${studentId}/subjects`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId);
      return ALL_SUBJECTS;
    } catch (error) {
      console.error('Error: cannot fetch all subjects');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPointByTerm(
    { studentId, term }: QueryStudentTrainingPointByTermArgs,
    accessToken: string
  ) {
    try {
      // const trainingPoint = await this.get(
      //   `/v1/students/${studentId}/drl?term=${term}`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId, term);
      return TRAINING_POINT_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch training point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPoint(
    { studentId }: QueryStudentTrainingPointArgs,
    accessToken: string
  ) {
    try {
      // const trainingPoint = await this.get(
      //   `/v1/students/${studentId}/drl`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId);
      return TRAINING_POINT;
    } catch (error) {
      console.error('Error: cannot fetch training point');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePointByTerm(
    { studentId, term }: QueryStudentAveragePointByTermArgs,
    accessToken: string
  ) {
    try {
      // const averagePoint = await this.get(
      //   `/v1/students/${studentId}/point?term=${term}`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId, term);
      return AVERAGE_POINT_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch average point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePoint(
    { studentId }: QueryStudentAveragePointArgs,
    accessToken: string
  ) {
    try {
      // const trainingPoint = await this.get(
      //   `/v1/students/${studentId}/point`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId);
      return AVERAGE_POINT;
    } catch (error) {
      console.error('Error: cannot fetch average point');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllTerms(
    { studentId }: QueryStudentAllTermsArgs,
    accessToken: string
  ) {
    try {
      // const termList = await this.get(
      //   `/v1/students/${studentId}/terms`,
      //   {
      //     headers: this.getHeaders(accessToken),
      //   }
      // );
      console.log('params', accessToken, studentId);
      return ALL_TERMS;
    } catch (error) {
      console.error('Error: cannot fetch all terms');
      throw this.handleError(error as ApolloError);
    }
  }

  private getHeaders(accessToken: string) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
}

export default StudentAPI;
