/* eslint-disable prefer-object-spread */
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
  QueryStudentEnrolledListArgs,
  QueryStudentNotEnrolledListArgs,
  QueryStudentTrainingPointListArgs,
  QueryStudentPostponeListArgs,
  QueryStudentAbsentListArgs,
  QueryStudentAllSubjectsResultArgs,
  QueryStudentStatisticsArgs,
  QueryStudentContactListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class StudentAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getStudentContactList({
    studentId,
    page,
    size,
  }: QueryStudentContactListArgs) {
    try {
      const res = await this.get(
        `v1/students/${studentId}/contacts?page=${page}&size=${size}`
      );
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch student contact list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentStatistics({ studentId }: QueryStudentStatisticsArgs) {
    try {
      const studentStatistics = await this.get(
        `v1/students/${studentId}/statistics`
      );
      return studentStatistics;
    } catch (error) {
      logger.error('Error: cannot fetch student statistics');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentEnrolledList({
    termId,
    page,
    size,
  }: QueryStudentEnrolledListArgs) {
    try {
      const studentList = await this.get(
        `v1/students/enrolled?termId=${termId}&page=${page}&size=${size}`
      );
      return studentList;
    } catch (error) {
      logger.error('Error: cannot fetch student enrolled list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentNotEnrolledList({
    termId,
    page,
    size,
  }: QueryStudentNotEnrolledListArgs) {
    try {
      const studentList = await this.get(
        `v1/students/not-enrolled?termId=${termId}&page=${page}&size=${size}`
      );
      return studentList;
    } catch (error) {
      logger.error('Error: cannot fetch student not enrolled list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentTrainingPointList({
    termId,
    page,
    size,
  }: QueryStudentTrainingPointListArgs) {
    try {
      const studentList = await this.get(
        `v1/students/training-points?termId=${termId}&page=${page}&size=${size}`
      );
      return studentList;
    } catch (error) {
      logger.error('Error: cannot fetch student training point list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentPostponeList({
    termId,
    page,
    size,
  }: QueryStudentPostponeListArgs) {
    try {
      const studentList = await this.get(
        `v1/students/postpone?termId=${termId}&page=${page}&size=${size}`
      );
      return studentList;
    } catch (error) {
      logger.error('Error: cannot fetch student postpone list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAbsentList({
    termId,
    page,
    size,
  }: QueryStudentAbsentListArgs) {
    try {
      const studentList = await this.get(
        `v1/students/absent?termId=${termId}&page=${page}&size=${size}`
      );
      return studentList;
    } catch (error) {
      logger.error('Error: cannot fetch student postpone list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentSubjectsByTerm({
    studentId,
    term,
  }: QueryStudentSubjectsByTermArgs) {
    try {
      const subjects = await this.get(
        `v1/students/${studentId}/subjects?term=${term}`
      );
      const studentDetail = await this.get(`/v1/students/${studentId}`);
      return {
        subjects: subjects.data,
        sinhVien: studentDetail,
      };
    } catch (error) {
      logger.error('Error: cannot fetch subject list by term');
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
      logger.error('Error: cannot fetch training point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAveragePointByTerm({
    studentId,
    term,
  }: QueryStudentAveragePointByTermArgs) {
    try {
      const averagePoint = await this.get(
        `v1/students/${studentId}/score?term=${term}`
      );
      return averagePoint;
    } catch (error) {
      logger.error('Error: cannot fetch average point by term');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllTerms({ studentId }: QueryStudentAllTermsArgs) {
    try {
      const termList = await this.get(`v1/students/${studentId}/terms`);
      return termList;
    } catch (error) {
      logger.error('Error: cannot fetch all terms');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentDetail({ studentId }: QueryStudentDetailArgs) {
    try {
      const studentDetail = await this.get(`v1/students/${studentId}`);
      return studentDetail;
    } catch (error) {
      logger.error('Error: cannot fetch student detail');
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
      logger.error('Error: cannot fetch student parent info list');
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
      logger.error('Error: cannot add student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editStudentContact({
    contactId,
    payload,
  }: MutationStudentEditContactArgs) {
    try {
      const res = await this.patch(`v1/student/contacts/${contactId}`, payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteStudentContact({
    contactId,
  }: MutationStudentDeleteContactArgs) {
    try {
      const res = await this.delete(`v1/student/contacts/${contactId}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot delete student contact');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentOverviewResult({
    studentId,
  }: QueryStudentOverviewResultArgs) {
    try {
      const overviewResult = await this.get(`v1/students/${studentId}/general`);
      return overviewResult;
    } catch (error) {
      logger.error('Error: cannot fetch student overview result');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentAllSubjectsResult({
    studentId,
  }: QueryStudentAllSubjectsResultArgs) {
    try {
      const daiCuong = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'daiCuong',
      });
      const coSoNganh = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'coSoNganh',
      });
      const batBuocChuyenNganh = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'batBuocNganh',
      });
      const tuChonChuyenNganh = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'tuChonChuyenNganh',
      });
      const tuChonTuDo = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'tuChonTuDo',
      });
      const totNghiep = await this.getStudentDetailSubjectsResult({
        studentId,
        subject: 'totNghiep',
      });
      const sinhVien = await this.getStudentDetail({ studentId });

      return {
        result: {
          daiCuong: daiCuong.data.data,
          coSoNganh: coSoNganh.data.data,
          batBuocChuyenNganh: batBuocChuyenNganh.data.data,
          tuChonChuyenNganh: tuChonChuyenNganh.data.data,
          tuChonTuDo: tuChonTuDo.data.data,
          totNghiep: totNghiep.data.data,
        },
        sinhVien,
      };
    } catch (error) {
      logger.error('Error: cannot fetch student all subjects result');
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
      logger.error('Error: cannot add student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editStudentParentInfo({
    parentId,
    payload,
  }: MutationStudentEditParentInfoArgs) {
    try {
      const res = await this.patch(`v1/student/parents/${parentId}`, payload);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteStudentParentInfo({
    parentId,
  }: MutationStudentDeleteParentInfoArgs) {
    try {
      const res = await this.delete(`v1/student/parents/${parentId}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot delete student parent info');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentNoteList({
    studentId,
    page,
    size,
    tieuDe,
    maTag,
    start,
    end,
  }: QueryStudentNoteListArgs) {
    try {
      const args = Object.assign(
        {},
        tieuDe && { tieuDe },
        maTag && { maTag },
        start && { start },
        end && { end },
        { page },
        { size }
      );

      let queryString = '';
      Object.keys(args).forEach((arg) => {
        queryString += `&${arg}=${args[arg]}`;
      });

      const res = await this.get(
        `v1/notes?maSV=${studentId}&sortBy=thoiGianSua&sortOrder=desc${queryString}`
      );
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch student note list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getStudentDetailSubjectsResult({
    studentId,
    subject,
  }: QueryStudentDetailSubjectsResultArgs) {
    try {
      const detailSubjectsResult = await this.get(
        `v1/students/${studentId}/result?subject=${subject}`
      );
      return detailSubjectsResult;
    } catch (error) {
      logger.error('Error: cannot fetch student detail subjects result');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default StudentAPI;
