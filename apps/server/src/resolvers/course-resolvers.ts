import { Resolvers } from '../generated-types';

import { ResolverContext } from './types';

export const courseResolver: Resolvers<ResolverContext> = {
  Query: {
    courseList: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.getCourseList(args);
      return res;
    },
    majorList: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.getMajorList(args);
      return res;
    },
    majorResultList: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.getMajorResultList(args);
      return res;
    },
  },
  Mutation: {
    courseEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.editCourse(args);
      return res.data;
    },
    majorEdit: async (_, args, { dataSources }) => {
      const res = await dataSources.courseAPI.editMajor(args);
      return res.data;
    },
  },
};

export default courseResolver;
