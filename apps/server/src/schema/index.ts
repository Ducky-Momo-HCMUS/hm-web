import { gql } from 'apollo-server-express';

import homeroomTypeDefs from './homeroom';

const typeDefs = gql`
  #=============#
  # Query Types #
  #=============#
  type Query {
    ping: String
  }
  type Mutation {
    ping: String
  }

  #============#
  # Interfaces #
  #============#
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

export default [typeDefs, homeroomTypeDefs];
