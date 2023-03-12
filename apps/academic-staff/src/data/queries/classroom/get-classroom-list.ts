import { gql } from '@apollo/client';

export const GET_CLASSROOM_LIST = gql`
  query ClassroomList($termId: Int!, $courseId: String) {
    classroomList(termId: $termId, courseId: $courseId) {
      maHP
      tenLopHP
    }
  }
`;
