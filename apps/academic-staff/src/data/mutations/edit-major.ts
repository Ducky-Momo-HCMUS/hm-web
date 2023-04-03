import { gql } from '@apollo/client';

export const EDIT_MAJOR = gql`
  mutation MajorEdit($majorId: Int!, $payload: MajorEditInput!) {
    majorEdit(majorId: $majorId, payload: $payload) {
      maCN
    }
  }
`;
