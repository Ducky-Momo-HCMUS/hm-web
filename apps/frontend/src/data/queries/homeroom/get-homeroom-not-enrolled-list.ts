import { gql } from '@apollo/client';

export const GET_HOMEROOM_NOT_ENROLLED_LIST = gql`
  query HomeroomNotEnrolledList($homeroomId: String!, $term: Int!) {
    homeroomNotEnrolledList(homeroomId: $homeroomId, term: $term) {
      khongDangKy {
        maSV
        tenSV
      }
    }
  }
`;
