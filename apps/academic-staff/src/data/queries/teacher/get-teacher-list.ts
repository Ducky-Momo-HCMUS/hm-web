import { gql } from '@apollo/client';

export const GET_TEACHER_LIST = gql`
  query TeacherList($year: Int!, $page: Int!, $size: Int!) {
    teacherList(year: $year, page: $page, size: $size) {
      total
      data {
        maSH
        tenGV
        email
      }
    }
  }
`;
