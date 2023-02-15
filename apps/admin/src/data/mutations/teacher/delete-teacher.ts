import { gql } from '@apollo/client';

export const DELETE_TEACHER = gql`
  mutation DeleteEdit($teacherId: Int!) {
    teacherDelete(teacherId: $teacherId) {
      maGV
    }
  }
`;
