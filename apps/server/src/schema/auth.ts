import { gql } from 'apollo-server-express';

const authTypeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): LoginResponse
    forgotPassword(email: String!): MutationStatusReponse
    resetPassword(
      id: Int!
      token: String!
      password: String!
      passwordConfirm: String!
    ): MutationStatusReponse
    editPassword(
      email: String!
      password: String!
      newPassword: String!
      passwordConfirm: String!
    ): MutationStatusReponse
  }

  type LoginResponse {
    token: String
  }
`;

export default authTypeDefs;
