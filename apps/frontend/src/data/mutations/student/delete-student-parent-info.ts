import { gql } from '@apollo/client';

export const DELETE_STUDENT_PARENT_INFO = gql`
  mutation StudentDeleteParentInfo($parentId: Int!) {
    studentDeleteParentInfo(parentId: $parentId) {
      status
    }
  }
`;
