import { gql } from '@apollo/client';

export const GET_STUDENT_ALL_TERMS = gql`
  query StudentAllTerms($studentId: String!) {
    studentAllTerms(studentId: $studentId) {
      maHK
      hocKy
      namHocBD
    }
  }
`;
