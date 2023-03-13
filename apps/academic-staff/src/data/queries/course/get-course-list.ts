import { gql } from '@apollo/client';

export const GET_COURSE_LIST = gql`
  query CourseList($page: Int, $size: Int) {
    courseList(page: $page, size: $size) {
      total
      data {
        maMH
        tenMH
        soTinChi
        maCN
        loaiMonHoc
        chuyenNganh
        tenCN
      }
    }
  }
`;
