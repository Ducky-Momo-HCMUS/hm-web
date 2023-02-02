import { gql } from '@apollo/client';

export const GET_HOMEROOM_OVERVIEW_REPORT_BY_TERM = gql`
  query HomeroomOverviewReportByTerm($homeroomId: String!, $term: Int!) {
    homeroomOverviewReportByTerm(homeroomId: $homeroomId, term: $term) {
      siSo {
        tong
        nam
        nu
      }
      hocTap {
        xuatSac
        gioi
        kha
        trungBinhKha
        trungBinh
        yeu
        chungChiNgoaiNgu
      }
      drl {
        xuatSac
        gioi
        kha
        trungBinhKha
        trungBinh
        yeu
      }
    }
  }
`;
