import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const studentResolver: Resolvers<ResolverContext> = {
  Query: {
    studentSubjectsByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentSubjectsByTerm(args)) || null
      );
    },
    studentAllSubjects: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentAllSubjects(args)) || null;
    },
    studentTrainingPointByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentTrainingPointByTerm(args)) ||
        null
      );
    },
    studentTrainingPoint: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentTrainingPoint(args)) || null
      );
    },
    studentAveragePointByTerm: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentAveragePointByTerm(args)) ||
        null
      );
    },
    studentAveragePoint: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentAveragePoint(args)) || null
      );
    },
    studentAllTerms: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentAllTerms(args)) || null;
    },
    studentDetail: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentDetail(args)) || null;
    },
    studentParentInfoList: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentParentInfoList(args)) || null
      );
    },
    studentNoteList: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.getStudentNoteList(args)) || null;
    },
    studentOverviewResult: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.getStudentOverviewResult(args)) || null
      );
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
      return (await dataSources.studentAPI.addStudentContact(args)) || null;
    },
    studentEditContact: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.editStudentContact(args)) || null;
    },
    studentDeleteContact: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.deleteStudentContact(args)) || null;
    },
    studentAddParentInfo: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.addStudentParentInfo(args)) || null;
    },
    studentEditParentInfo: async (_, args, { dataSources }) => {
      return (await dataSources.studentAPI.editStudentParentInfo(args)) || null;
    },
    studentDeleteParentInfo: async (_, args, { dataSources }) => {
      return (
        (await dataSources.studentAPI.deleteStudentParentInfo(args)) || null
      );
    },
  },
};

export default studentResolver;
