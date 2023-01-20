import { gql } from '@apollo/client';

export const GET_STUDENT_PARENT_INFO_LIST = gql`
  query StudentParentInfoList($studentId: String!) {
    studentParentInfoList(studentId: $studentId) {
      dsPhuHuynh {
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
