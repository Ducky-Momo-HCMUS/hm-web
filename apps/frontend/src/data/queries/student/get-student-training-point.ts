import { gql } from '@apollo/client';

export const GET_STUDENT_TRAINING_POINT = gql`
  query StudentTrainingPoint($studentId: String!) {
    studentTrainingPoint(studentId: $studentId) {
      drl
      xepLoai
    }
  }
`;
