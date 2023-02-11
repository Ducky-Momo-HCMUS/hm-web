import { gql } from '@apollo/client';

export const RESET_PASSWORD = gql`
  mutation ResetPassword($id: Int!, $token: String!, $password: String!) {
    resetPassword(id: $id, token: $token, password: $password) {
      status
    }
  }
`;
