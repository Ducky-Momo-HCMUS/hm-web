import { gql } from '@apollo/client';

export const EDIT_PASSWORD = gql`
  mutation EditPassword(
    $email: String!
    $password: String!
    $newPassword: String!
    $passwordConfirm: String!
  ) {
    editPassword(
      email: $email
      password: $password
      newPassword: $newPassword
      passwordConfirm: $passwordConfirm
    ) {
      status
    }
  }
`;
