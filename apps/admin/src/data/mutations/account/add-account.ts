import { gql } from '@apollo/client';

export const ADD_ACCOUNT = gql`
  mutation AccountAdd($payload: AccountAddInput!) {
    accountAdd(payload: $payload) {
      maTK
      email
      matKhau
    }
  }
`;
