import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
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
      return res.data;
    },
    studentOverviewResult: async (_, args, { dataSources }) => {
      const res = await dataSources.studentAPI.getStudentOverviewResult(args);
      return res.data;
    },
    studentDetailSubjectsResult: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentDetailSubjectsResult(args)) ||
        null
      );
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
};

export default studentResolver;
