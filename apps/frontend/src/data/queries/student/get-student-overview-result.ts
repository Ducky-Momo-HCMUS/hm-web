import { gql } from '@apollo/client';

export const GET_STUDENT_OVERVIEW_RESULT = gql`
  query StudentOverviewResult($studentId: String!) {
    studentOverviewResult(studentId: $studentId) {
      tenCN
      daiCuong
      coSoNganh
      batBuocChuyenNganh
      tuChonTuDo
      tuChonChuyenNganh
      totNghiep
      tongTC
      tongTCDaHoc
      dtb
    }
  }
`;
