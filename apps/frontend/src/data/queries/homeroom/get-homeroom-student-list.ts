import { gql } from '@apollo/client';

export const GET_HOMEROOM_STUDENT_LIST = gql`
  query HomeroomStudentList($homeroomId: String!, $page: Int!, $size: Int!) {
    homeroomStudentList(homeroomId: $homeroomId, page: $page, size: $size) {
      total
      data {
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
  }
`;
