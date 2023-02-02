import { gql } from '@apollo/client';

export const EDIT_ACCOUNT = gql`
  mutation AccountEdit($accountId: Int!, $payload: AccountEditInput!) {
    accountEdit(accountId: $accountId, payload: $payload) {
      status
    }
  }
`;
