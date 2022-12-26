import { gql } from '@apollo/client';

export const GET_HOMEROOM_FAIL_LIST = gql`
  query HomeroomFailList($homeroomId: String!) {
    homeroomFailList(homeroomId: $homeroomId) {
      dsRotMon {
        maSV
        tenSV
        tenMH
        tenLopHP
        dtb
        vang
      }
    }
  }
`;
