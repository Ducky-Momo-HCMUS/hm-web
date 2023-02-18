import { gql } from '@apollo/client';

export const GET_ALL_TEACHER_LIST = gql`
  query AllTeacherList($page: Int!, $size: Int!) {
    allTeacherList(page: $page, size: $size) {
      total
      data {
        maGV
        tenGV
        email
        lopSinhHoat {
          maSH
        }
      }
    }
  }
`;
