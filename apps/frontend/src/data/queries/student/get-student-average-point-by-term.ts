import { gql } from '@apollo/client';

export const GET_STUDENT_AVERAGE_POINT_BY_TERM = gql`
  query StudentAveragePointByTerm($studentId: String!, $term: Int!) {
    studentAveragePointByTerm(studentId: $studentId, term: $term) {
      dtb
      xepLoai
    }
  }
`;
