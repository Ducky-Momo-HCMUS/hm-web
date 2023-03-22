import { gql } from '@apollo/client';

export const GET_STUDENT_ALL_SUBJECTS_RESULT = gql`
  query StudentAllSubjectsResult($studentId: String!) {
    studentAllSubjectsResult(studentId: $studentId) {
      result {
        daiCuong {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
        coSoNganh {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
        batBuocChuyenNganh {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
        tuChonChuyenNganh {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
        tuChonTuDo {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
        totNghiep {
          tichLuy
          monHoc {
            maMH
            tenMH
            soTC
            namHoc
            hocKy
            dtb
          }
        }
      }
      sinhVien {
        tenSV
        dob
      }
    }
  }
`;
