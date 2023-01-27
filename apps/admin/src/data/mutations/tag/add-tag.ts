import { gql } from '@apollo/client';

export const ADD_TAG = gql`
  mutation TagAdd($payload: TagAddInput!) {
    tagAdd(payload: $payload) {
      maTag
      tenTag
    }
  }
`;
