import { gql } from '@apollo/client';

export const GET_HOMEROOM_STUDENT_LIST = gql`
  query HomeroomStudentList($homeroomId: String!) {
    homeroomStudentList(homeroomId: $homeroomId) {
      sinhVien {
        maSV
        tenSV
        maCN
        tinhTrang
        gpa4
        gpa10
        sdt
        lienHe {
          mxh
          url
        }
      }
    }
  }
`;
