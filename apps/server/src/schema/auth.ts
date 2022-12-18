import { gql } from 'apollo-server-express';

const authTypeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): LoginResponse
  }

  type LoginResponse {
    code: String!
    success: Boolean!
    message: String

    token: String
  }
`;

export default authTypeDefs;
