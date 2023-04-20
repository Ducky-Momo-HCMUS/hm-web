import { gql } from '@apollo/client';

export const GET_CLASSROOM_LIST = gql`
  query ClassroomList($termId: Int!, $subjectId: String) {
    classroomList(termId: $termId, subjectId: $subjectId) {
      maHP
      tenLopHP
      monHoc {
        maMH
        tenMH
      }
    }
  }
`;
