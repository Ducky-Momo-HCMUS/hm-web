import { gql } from '@apollo/client';

export const EDIT_ACCOUNT = gql`
  mutation AccountEdit($payload: AccountEditInput!) {
    accountEdit(payload: $payload) {
      maTK
      tenGV
    }
  }
`;
