import { gql } from '@apollo/client';

export const GET_STUDENT_TRAINING_POINT_BY_TERM = gql`
  query StudentTrainingPointByTerm($studentId: String!, $term: Int!) {
    studentTrainingPointByTerm(studentId: $studentId, term: $term) {
      drl
      xepLoai
    }
  }
`;
