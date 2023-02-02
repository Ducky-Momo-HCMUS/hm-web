import { gql } from '@apollo/client';

export const DELETE_ACCOUNT = gql`
  mutation AccountDelete($accountId: Int!) {
    accountDelete(accountId: $accountId) {
      status
    }
  }
`;
