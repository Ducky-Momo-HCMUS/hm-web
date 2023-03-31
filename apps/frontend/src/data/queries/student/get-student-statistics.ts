import { gql } from '@apollo/client';

export const GET_STUDENT_STATISTICS = gql`
  query StudentStatistics($studentId: String!) {
    studentStatistics(studentId: $studentId) {
      namHoc
      hocKy
      dtb
      drl
      soTinChi
    }
  }
`;
