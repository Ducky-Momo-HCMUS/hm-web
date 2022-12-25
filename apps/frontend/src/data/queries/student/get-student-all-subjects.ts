import { gql } from '@apollo/client';

export const GET_STUDENT_ALL_SUBJECTS = gql`
  query StudentAllSubjects($studentId: String!) {
    studentAllSubjects(studentId: $studentId) {
      monhoc {
        maMH
        tenMH
        tenLopHP
        dtb
        gvlt
        gvth
        tinhTrang
      }
    }
  }
`;
