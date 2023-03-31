import { gql } from '@apollo/client';

export const GET_HOMEROOM_STUDENT_LIST = gql`
  query HomeroomStudentList(
    $homeroomId: String!
    $page: Int!
    $size: Int!
    $sortBy: String
    $sortOrder: String
    $unruly: Boolean
  ) {
    homeroomStudentList(
      homeroomId: $homeroomId
      page: $page
      size: $size
      sortBy: $sortBy
      sortOrder: $sortOrder
      unruly: $unruly
    ) {
      total
      data {
        maSV
        tenSV
        tenCN
        tinhTrang
        gpa4
        gpa10
        sdt
        emailSV
        lienHeSV {
          mxh
          url
        }
      }
    }
  }
`;
