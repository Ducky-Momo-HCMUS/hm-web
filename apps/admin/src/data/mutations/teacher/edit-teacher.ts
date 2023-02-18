import { gql } from '@apollo/client';

export const EDIT_TEACHER = gql`
  mutation TeacherEdit($teacherId: Int!, $payload: TeacherEditInput!) {
    teacherEdit(teacherId: $teacherId, payload: $payload) {
      maGV
    }
  }
`;
