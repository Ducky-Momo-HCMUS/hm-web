import { gql } from '@apollo/client';

export const GET_ALL_TERMS = gql`
  query AllTerms($studentId: String!) {
    allTerms(studentId: $studentId) {
      maHK
      hocKy
      namHocBD
    }
  }
`;
