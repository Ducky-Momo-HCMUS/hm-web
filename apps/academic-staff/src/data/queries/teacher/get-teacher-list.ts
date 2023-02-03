import { gql } from '@apollo/client';

export const GET_TEACHER_LIST = gql`
  query TeacherList($year: String!) {
    teacherList(year: $year) {
      danhSachGVCN {
        maSH
        tenGVCN
        email
      }
    }
  }
`;
