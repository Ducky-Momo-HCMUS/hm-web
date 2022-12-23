import { gql } from '@apollo/client';

export const GET_ALL_SUBJECTS = gql`
  query AllSubjects($studentId: String!) {
    allSubjects(studentId: $studentId) {
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
