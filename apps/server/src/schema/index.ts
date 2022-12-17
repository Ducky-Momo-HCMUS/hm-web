import { gql } from 'apollo-server-express';

import { typeDefs as homeroomTypeDefs } from './homeroom';
import { typeDefs as fileTypeDefs } from './file';

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

export default [typeDefs, homeroomTypeDefs, fileTypeDefs];
