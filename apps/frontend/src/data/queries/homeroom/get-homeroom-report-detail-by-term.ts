import { gql } from '@apollo/client';

export const GET_HOMEROOM_REPORT_DETAIL_BY_TERM = gql`
  query HomeroomReportDetailByTerm($homeroomId: String!, $term: Int!) {
    homeroomReportDetailByTerm(homeroomId: $homeroomId, term: $term) {
      overviewReport {
        siSo {
          tong
          nam
          nu
        }
        hocTap {
          xuatSac
          gioi
          kha
          trungBinh
          yeu
          kem
          chungChiNgoaiNgu
        }
        drl {
          xuatSac
          gioi
          kha
          trungBinh
          yeu
          kem
        }
      }
      finalResult {
        total
        formatted {
          maSV
          tenSV
          dtb
          xepLoai
        }
      }
      examAbsent {
        data {
          sinhVien {
            maSV
            tenSV
          }
          monHoc {
            tenMH
          }
        }
      }
      examPostpone {
        data {
          sinhVien {
            maSV
            tenSV
          }
          monHoc {
            tenMH
          }
        }
      }
    }
  }
`;
