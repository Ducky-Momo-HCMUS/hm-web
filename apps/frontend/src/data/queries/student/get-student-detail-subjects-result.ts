import { gql } from '@apollo/client';

export const GET_STUDENT_DETAIL_SUBJECTS_RESULT = gql`
  query StudentDetailSubjectsResult($studentId: String!, $subject: String!) {
    studentDetailSubjectsResult(studentId: $studentId, subject: $subject) {
      tichLuy
      monHoc {
        maMH
        tenMH
        soTC
        namHoc
        hocKy
        diem
      }
    }
  }
`;
