import { gql } from '@apollo/client';

export const GET_STUDENT_AVERAGE_POINT = gql`
  query StudentAveragePoint($studentId: String!) {
    studentAveragePoint(studentId: $studentId) {
      dtbTong
      xepLoai
    }
  }
`;
