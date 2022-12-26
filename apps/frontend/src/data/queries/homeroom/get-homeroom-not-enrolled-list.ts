import { gql } from '@apollo/client';

export const GET_HOMEROOM_NOT_ENROLLED_LIST = gql`
  query HomeroomNotEnrolledList($homeroomId: String!) {
    homeroomNotEnrolledList(homeroomId: $homeroomId) {
      khongDangKy {
        maSV
        tenSV
      }
    }
  }
`;
