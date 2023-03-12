import { gql } from 'apollo-server-express';

import authTypeDefs from './auth';
import fileTypeDefs from './file';
import homeroomTypeDefs from './homeroom';
import noteTypeDefs from './note';
import studentTypeDefs from './student';
import tagTypeDefs from './tag';
import accountTypeDefs from './account';
import teacherTypeDefs from './teacher';
import courseTypeDefs from './course';
import classroomTypeDefs from './classroom';

const typeDefs = gql`
  #=============#
  # Query Types #
  #=============#
  type Query
  type Mutation

  type MutationStatusReponse {
    status: Int
  }

  #============#
  # Interfaces #
  #============#
`;

export default [
  typeDefs,
  authTypeDefs,
  homeroomTypeDefs,
  studentTypeDefs,
  noteTypeDefs,
  tagTypeDefs,
  accountTypeDefs,
  fileTypeDefs,
  teacherTypeDefs,
  courseTypeDefs,
  classroomTypeDefs,
];
