import { gql } from '@apollo/client';

export const GET_STUDENT_PARENT_INFO_LIST = gql`
  query StudentParentInfoList($studentId: String!, $page: Int!, $size: Int!) {
    studentParentInfoList(studentId: $studentId, page: $page, size: $size) {
      total
      data {
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
  }
`;
