import { gql } from '@apollo/client';

export const GET_STUDENT_DETAIL = gql`
  query StudentDetail($studentId: String!) {
    studentDetail(studentId: $studentId) {
      maSV
      tenSV
      gioiTinh
      dob
      emailSV
      emailCaNhan
      sdt
      tenCN
      gpa_4
      gpa_10
      ngoaiNgu
      tinhTrang
      maSH
      xepLoai
      lienHeSV {
        maLHSV
        mxh
        url
      }
    }
  }
`;
