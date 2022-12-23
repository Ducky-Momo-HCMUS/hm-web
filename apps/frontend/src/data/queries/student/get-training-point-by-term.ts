import { gql } from '@apollo/client';

export const GET_TRAINING_POINT_BY_TERM = gql`
  query TrainingPointByTerm($studentId: String!, $term: Int!) {
    trainingPointByTerm(studentId: $studentId, term: $term) {
      drl
      xepLoai
    }
  }
`;
