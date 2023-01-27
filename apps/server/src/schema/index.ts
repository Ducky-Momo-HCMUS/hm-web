import { gql } from 'apollo-server-express';

import authTypeDefs from './auth';
import homeroomTypeDefs from './homeroom';
import noteTypeDefs from './note';
import studentTypeDefs from './student';
import tagTypeDefs from './tag';

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
];
