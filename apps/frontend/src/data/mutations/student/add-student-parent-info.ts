import { gql } from '@apollo/client';

export const ADD_STUDENT_PARENT_INFO = gql`
  mutation StudentAddParentInfo(
    $studentId: String!
    $payload: StudentAddParentInfoInput!
  ) {
    studentAddParentInfo(studentId: $studentId, payload: $payload) {
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
