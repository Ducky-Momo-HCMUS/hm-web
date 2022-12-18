import { gql } from 'apollo-server-express';

import authTypeDefs from './auth';
import homeroomTypeDefs from './homeroom';

const typeDefs = gql`
  #=============#
  # Query Types #
  #=============#
  type Query
  type Mutation

  #============#
  # Interfaces #
  #============#
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String
  }
`;

export default [typeDefs, authTypeDefs, homeroomTypeDefs];
