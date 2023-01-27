import { gql } from '@apollo/client';

export const DELETE_TAG = gql`
  mutation TagDelete($tagId: Int!) {
    tagDelete(tagId: $tagId) {
      status
    }
  }
`;
