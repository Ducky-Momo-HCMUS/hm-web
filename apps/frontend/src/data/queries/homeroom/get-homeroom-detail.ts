import { gql } from '@apollo/client';

export const GET_HOMEROOM_DETAIL = gql`
  query HomeroomDetail($homeroomId: String!) {
    homeroomDetail(homeroomId: $homeroomId) {
      tenGV
      soLuongSV
    }
  }
`;
