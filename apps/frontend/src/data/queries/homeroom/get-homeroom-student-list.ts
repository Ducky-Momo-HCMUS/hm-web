import { gql } from '@apollo/client';

export const GET_HOMEROOM_STUDENT_LIST = gql`
  query HomeroomStudentList($homeroomId: String!) {
    homeroomStudentList(homeroomId: $homeroomId) {
      maSV
      tenSV
      tenCN
      tinhTrang
      gpa4
      gpa10
      sdt
      emailSV
      lienHeSV {
        mxh
        url
      }
    }
  }
`;
