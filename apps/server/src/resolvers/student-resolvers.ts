import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
    studentEnrolledList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentEnrolledList(args);
      return res;
    },
    studentNotEnrolledList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentNotEnrolledList(args);
      return res;
    },
    studentTrainingPointList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentTrainingPointList(
        args
      );
      return res;
    },
    studentPostponeList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentPostponeList(args);
      return res;
    },
    studentAbsentList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentAbsentList(args);
      return res;
    },
    studentSubjectsByTerm: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentSubjectsByTerm(args);
      return res.data;
    },
    studentTrainingPointByTerm: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentTrainingPointByTerm(
        args
      );
      return res.data;
    },
    studentAveragePointByTerm: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentAveragePointByTerm(
        args
      );
      return res.data;
    },
    studentAllTerms: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentAllTerms(args);
      return res.data;
    },
    studentDetail: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentDetail(args)) || null;
    },
    studentParentInfoList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentParentInfoList(args);
      return res.data;
    },
    studentNoteList: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentNoteList(args);
      return res;
    },
    studentOverviewResult: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentOverviewResult(args);
      return res.data;
    },
    studentDetailSubjectsResult: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentDetailSubjectsResult(
        args
      );
      return res.data.data;
    },
  },
  Mutation: {
    studentAddContact: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.addStudentContact(args);
      return res.data;
    },
    studentEditContact: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.editStudentContact(args);
      return res.data;
    },
    studentDeleteContact: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.deleteStudentContact(args);
      return res.data;
    },
    studentAddParentInfo: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.addStudentParentInfo(args);
      return res.data;
    },
    studentEditParentInfo: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.editStudentParentInfo(args);
      return res.data;
    },
    studentDeleteParentInfo: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.deleteStudentParentInfo(args);
      return res.data;
    },
  },
  NoteDetail: {
    sinhVien(parent, args, { dataSources }) {
      if (!parent.maSV) {
        return null;
      }
      return dataSources.studentAPI.getStudentDetail({
        studentId: parent.maSV,
      });
    },
  },
};

export default studentResolver;
