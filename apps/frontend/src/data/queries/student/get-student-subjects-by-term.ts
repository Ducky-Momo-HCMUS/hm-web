import { gql } from '@apollo/client';

export const GET_STUDENT_SUBJECTS_BY_TERM = gql`
  query StudentSubjectsByTerm($studentId: String!, $term: Int!) {
    studentSubjectsByTerm(studentId: $studentId, term: $term) {
      maMH
      tenMH
      tenLopHP
      tinhTrang
      soTinChi
      diemGK
      diemTH
      diemCong
      diemKhac
      diemCK
      dtb
    }
  }
`;
