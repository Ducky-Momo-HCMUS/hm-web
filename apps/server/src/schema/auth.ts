import { gql } from 'apollo-server-express';

const authTypeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): LoginResponse
  }

  type LoginResponse {
    token: String
  }
`;

export default authTypeDefs;
