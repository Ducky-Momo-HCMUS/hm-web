import { gql } from '@apollo/client';

export const DELETE_TEACHER = gql`
  mutation TeacherDelete($teacherId: Int!) {
    teacherDelete(teacherId: $teacherId) {
      maGV
    }
  }
`;
