import { gql } from '@apollo/client';

export const ACTIVATE_ACCOUNT = gql`
  mutation AccountActivate($payload: AccountActivateInput!) {
    accountActivate(payload: $payload) {
      maTK
      email
    }
  }
`;
