import { gql } from '@apollo/client';

export const GET_ALL_TEACHER_LIST = gql`
  query AllTeacherList {
    allTeacherList {
      data {
        tenGV
        email
        lopSinhHoat {
          maSH
        }
      }
    }
  }
`;
