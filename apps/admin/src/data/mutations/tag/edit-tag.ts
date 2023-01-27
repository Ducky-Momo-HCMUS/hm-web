import { gql } from '@apollo/client';

export const EDIT_TAG = gql`
  mutation TagEdit($tagId: Int!, $payload: TagEditInput!) {
    tagEdit(tagId: $tagId, payload: $payload) {
      maTag
      tenTag
    }
  }
`;
