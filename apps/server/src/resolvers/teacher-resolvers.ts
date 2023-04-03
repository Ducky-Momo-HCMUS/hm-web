import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const teacherResolver: Resolvers<ResolverContext> = {
  Query: {
    teacherList: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.getTeacherList(args);
      return res.data;
    },
    allTeacherList: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.getAllTeacherList(args);
      return res.data;
    },
    yearList: async (_, __, { dataSources }) => {
      const res = await dataSources.teacherAPI.getYearList();
      return res.data;
    },
    teacherSearchStudentList: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.getSearchStudentList(args);
      return res;
    },
  },
  Mutation: {
    teacherEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.updateTeacher(args);
      return res.data;
    },
    teacherDelete: async (_, args, { dataSources }) => {
      const res = await dataSources.teacherAPI.deleteTeacher(args);
      return res;
    },
  },
};

export default teacherResolver;
