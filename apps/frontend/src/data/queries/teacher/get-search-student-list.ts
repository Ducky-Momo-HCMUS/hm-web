import { gql } from '@apollo/client';

export const GET_STUDENT_ALL_TERMS = gql`
  query TeacherSearchStudentList($maSV: String, $tenSV: String) {
    teacherSearchStudentList(maSV: $maSV, tenSV: $tenSV) {
      total
      data {
        maSV
        tenSV
        tenCN
        tinhTrang
        gpa4
        gpa10
      }
    }
  }
`;
