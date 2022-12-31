import { ApolloError } from 'apollo-server-express';

import {
  MutationStudentAddContactArgs,
  QueryStudentAllSubjectsArgs,
  QueryStudentAllTermsArgs,
  QueryStudentAveragePointArgs,
  QueryStudentAveragePointByTermArgs,
  QueryStudentDetailArgs,
  QueryStudentParentInfoListArgs,
  QueryStudentSubjectsByTermArgs,
  QueryStudentTrainingPointArgs,
  QueryStudentTrainingPointByTermArgs,
} from '../generated-types';
import {
  ALL_SUBJECTS,
  ALL_TERMS,
  AVERAGE_POINT,
  AVERAGE_POINT_BY_TERM,
  STUDENT_ADD_CONTACT_RESPONSE,
  STUDENT_DETAIL,
  STUDENT_PARENT_INFO_LIST,
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

  public async getStudentSubjectsByTerm({
    studentId,
    term,
  }: QueryStudentSubjectsByTermArgs) {
    try {
      // const subjectList = await this.get(
      //   `v1/students/${studentId}/subjects?term=${term}`,
      // );
      console.log('params', studentId, term);
      return SUBJECTS_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch subject list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllSubjects({
    studentId,
  }: QueryStudentAllSubjectsArgs) {
    try {
      // const subjectList = await this.get(
      //   `v1/students/${studentId}/subjects`,
      // );
      console.log('params', studentId);
      return ALL_SUBJECTS;
    } catch (error) {
      console.error('Error: cannot fetch all subjects');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPointByTerm({
    studentId,
    term,
  }: QueryStudentTrainingPointByTermArgs) {
    try {
      // const trainingPoint = await this.get(
      //   `v1/students/${studentId}/drl?term=${term}`,
      // );
      console.log('params', studentId, term);
      return TRAINING_POINT_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch training point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPoint({
    studentId,
  }: QueryStudentTrainingPointArgs) {
    try {
      // const trainingPoint = await this.get(
      //   `v1/students/${studentId}/drl`,
      // );
      console.log('params', studentId);
      return TRAINING_POINT;
    } catch (error) {
      console.error('Error: cannot fetch training point');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePointByTerm({
    studentId,
    term,
  }: QueryStudentAveragePointByTermArgs) {
    try {
      // const averagePoint = await this.get(
      //   `v1/students/${studentId}/point?term=${term}`,
      // );
      console.log('params', studentId, term);
      return AVERAGE_POINT_BY_TERM;
    } catch (error) {
      console.error('Error: cannot fetch average point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePoint({
    studentId,
  }: QueryStudentAveragePointArgs) {
    try {
      // const trainingPoint = await this.get(
      //   `v1/students/${studentId}/point`,
      // );
      console.log('params', studentId);
      return AVERAGE_POINT;
    } catch (error) {
      console.error('Error: cannot fetch average point');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllTerms({ studentId }: QueryStudentAllTermsArgs) {
    try {
      // const termList = await this.get(
      //   `v1/students/${studentId}/terms`,
      // );
      console.log('params', studentId);
      return ALL_TERMS;
    } catch (error) {
      console.error('Error: cannot fetch all terms');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentDetail({ studentId }: QueryStudentDetailArgs) {
    try {
      // const studentDetail = await this.get(
      //   `v1/students/${studentId}`,
      // );
      console.log('params', studentId);
      return STUDENT_DETAIL;
    } catch (error) {
      console.error('Error: cannot fetch student detail');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentParentInfoList({
    studentId,
  }: QueryStudentParentInfoListArgs) {
    try {
      // const studentParentInfoList = await this.get(
      //   `v1/students/${studentId}/parents`,
      // );
      console.log('params', studentId);
      return STUDENT_PARENT_INFO_LIST;
    } catch (error) {
      console.error('Error: cannot fetch student parent info list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addStudentContact({
    studentId,
    payload,
  }: MutationStudentAddContactArgs) {
    try {
      // const addedContact = await this.post(
      //   `v1/students/${studentId}/parents`,
      //   payload
      // );
      console.log('params', studentId);
      console.log('payload', payload);
      return STUDENT_ADD_CONTACT_RESPONSE;
    } catch (error) {
      console.error('Error: cannot add student contact');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default StudentAPI;
