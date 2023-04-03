import { gql } from '@apollo/client';

export const EDIT_COURSE = gql`
  mutation CourseEdit($courseId: String!, $payload: CourseEditInput!) {
    courseEdit(courseId: $courseId, payload: $payload) {
      maMH
    }
  }
`;
