import { gql } from '@apollo/client';

export const DELETE_ACCOUNT = gql`
  mutation AccountDelete($payload: AccountDeleteInput!) {
    accountDelete(payload: $payload) {
      maTK
      email
    }
  }
`;
