import { gql } from '@apollo/client';

export const RESET_PASSWORD = gql`
  mutation ResetPassword(
    $id: Int!
    $token: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    resetPassword(
      id: $id
      token: $token
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      status
    }
  }
`;
