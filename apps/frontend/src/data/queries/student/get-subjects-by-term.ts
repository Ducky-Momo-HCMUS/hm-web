import { gql } from '@apollo/client';

export const GET_SUBJECTS_BY_TERM = gql`
  query SubjectsByTerm($studentId: String!, $term: Int!) {
    subjectsByTerm(studentId: $studentId, term: $term) {
      maMH
      tenMH
      tenLopHP
      dtb
      gvlt
      gvth
      tinhTrang
    }
  }
`;
