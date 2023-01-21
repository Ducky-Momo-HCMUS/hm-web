import { gql } from '@apollo/client';

export const EDIT_STUDENT_PARENT_INFO = gql`
  mutation StudentEditParentInfo(
    $parentId: Int!
    $payload: StudentEditParentInfoInput!
  ) {
    studentEditParentInfo(parentId: $parentId, payload: $payload) {
      maPH
      tenPH
      quanHe
      sdt
      sua
      lienHePH {
        maLHPH
        mxh
        url
      }
    }
  }
`;
