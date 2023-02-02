import { gql } from '@apollo/client';

export const GET_HOMEROOM_EXAM_POSTPONED_LIST_BY_TERM = gql`
  query HomeroomExamPostponedListByTerm($homeroomId: String!, $term: Int!) {
    homeroomExamPostponedListByTerm(homeroomId: $homeroomId, term: $term) {
      danhSachHoanThi {
        maSV
        hoTen
        monHoc
        lopHP
      }
    }
  }
`;
