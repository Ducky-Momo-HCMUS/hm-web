import { gql } from '@apollo/client';

export const GET_HOMEROOM_WATCH_LIST = gql`
  query HomeroomWatchList($homeroomId: String!) {
    homeroomWatchList(homeroomId: $homeroomId) {
      total
      data {
        sinhVien {
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
  }
`;
