import { ApolloError } from 'apollo-server-express';

import {
  MutationStudentAddContactArgs,
  MutationStudentAddParentInfoArgs,
  MutationStudentDeleteContactArgs,
  MutationStudentDeleteParentInfoArgs,
  MutationStudentEditContactArgs,
  MutationStudentEditParentInfoArgs,
  QueryStudentAllTermsArgs,
  QueryStudentAveragePointByTermArgs,
  QueryStudentDetailArgs,
  QueryStudentParentInfoListArgs,
  QueryStudentNoteListArgs,
  QueryStudentDetailSubjectsResultArgs,
  QueryStudentOverviewResultArgs,
  QueryStudentSubjectsByTermArgs,
  QueryStudentTrainingPointByTermArgs,
} from '../generated-types';
import {
  STUDENT_DETAIL_SUBJECTS_RESULT,
  STUDENT_OVERVIEW_RESULT,
} from '../mocks/student';
import { SERVICES_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class StudentAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getStudentSubjectsByTerm({
    studentId,
    term,
  }: QueryStudentSubjectsByTermArgs) {
    try {
      const subjectList = await this.get(
        `v1/students/${studentId}/subjects?term=${term}`
      );
      return subjectList;
    } catch (error) {
      console.error('Error: cannot fetch subject list by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPointByTerm({
    studentId,
    term,
  }: QueryStudentTrainingPointByTermArgs) {
    try {
      const trainingPoint = await this.get(
        `v1/students/${studentId}/drl?term=${term}`
      );
      return trainingPoint;
    } catch (error) {
      console.error('Error: cannot fetch training point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePointByTerm({
    studentId,
    term,
  }: QueryStudentAveragePointByTermArgs) {
    try {
      const averagePoint = await this.get(
        `v1/students/${studentId}/point?term=${term}`
      );
      return averagePoint;
    } catch (error) {
      console.error('Error: cannot fetch average point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllTerms({ studentId }: QueryStudentAllTermsArgs) {
    try {
      const termList = await this.get(`v1/students/${studentId}/terms`);
      return termList;
    } catch (error) {
      console.error('Error: cannot fetch all terms');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentDetail({ studentId }: QueryStudentDetailArgs) {
    try {
      const studentDetail = await this.get(`v1/students/${studentId}`);
      return studentDetail;
    } catch (error) {
      console.error('Error: cannot fetch student detail');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentParentInfoList({
    studentId,
    page,
    size,
  }: QueryStudentParentInfoListArgs) {
    try {
      const studentParentInfoList = await this.get(
        `v1/students/${studentId}/parents?page=${page}&size=${size}`
      );
      return studentParentInfoList;
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
      const addedContact = await this.post(
        `v1/students/${studentId}/contacts`,
        payload
      );
      return addedContact;
    } catch (error) {
      console.error('Error: cannot add student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editStudentContact({
    contactId,
    payload,
  }: MutationStudentEditContactArgs) {
    try {
      const res = await this.patch(
        `v1/students/contacts/${contactId}`,
        payload
      );
      return res;
    } catch (error) {
      console.error('Error: cannot edit student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteStudentContact({
    contactId,
  }: MutationStudentDeleteContactArgs) {
    try {
      const res = await this.delete(`v1/students/contacts/${contactId}`);
      return res;
    } catch (error) {
      console.error('Error: cannot delete student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentOverviewResult({
    studentId,
  }: QueryStudentOverviewResultArgs) {
    try {
      // const overviewResult = await this.get(
      //   `v1/students/${studentId}/general`,
      // );
      console.log('params', studentId);
      return STUDENT_OVERVIEW_RESULT;
    } catch (error) {
      console.error('Error: cannot fetch student overview result');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addStudentParentInfo({
    studentId,
    payload,
  }: MutationStudentAddParentInfoArgs) {
    try {
      const res = await this.post(`v1/students/${studentId}/parents`, payload);
      return res;
    } catch (error) {
      console.error('Error: cannot add student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editStudentParentInfo({
    parentId,
    payload,
  }: MutationStudentEditParentInfoArgs) {
    try {
      const res = await this.patch(`v1/students/parents/${parentId}`, payload);
      return res;
    } catch (error) {
      console.error('Error: cannot edit student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteStudentParentInfo({
    parentId,
  }: MutationStudentDeleteParentInfoArgs) {
    try {
      const res = await this.delete(`v1/students/parents/${parentId}`);
      return res;
    } catch (error) {
      console.error('Error: cannot delete student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentNoteList({ studentId }: QueryStudentNoteListArgs) {
    try {
      const res = await this.get('v1/notes', studentId);
      return res;
    } catch (error) {
      console.error('Error: cannot fetch student note list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentDetailSubjectsResult({
    studentId,
    subject,
  }: QueryStudentDetailSubjectsResultArgs) {
    try {
      // const detailSubjectsResult = await this.get(
      //   `v1/students/${studentId}?subject=${subject}`,
      // );
      console.log('params', studentId, subject);
      return STUDENT_DETAIL_SUBJECTS_RESULT;
    } catch (error) {
      console.error('Error: cannot fetch student detail subjects result');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default StudentAPI;
