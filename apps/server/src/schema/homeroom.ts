import { gql } from 'apollo-server-express';

const homeroomTypeDefs = gql`
  extend type Query {
    homeroomList: HomeroomList!
    homeroomStudentList(homeroomId: String!): HomeroomStudentList!
    homeroomDetail(homeroomId: String!): HomeroomDetail!
    homeroomTermList(homeroomId: String!): HomeroomTermList!
    homeroomFailListByTerm(homeroomId: String!, term: Int!): HomeroomFailList!
    homeroomNotEnrolledListByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomNotEnrolledList!
    homeroomPostponeExamListByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomPostponeExamList!
    homeroomOverviewReportByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomOverviewReport!
    homeroomFinalResultListByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomFinalResultList!
    homeroomExamAbsentListByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomExamAbsentList!
    homeroomExamPostponedListByTerm(
      homeroomId: String!
      term: Int!
    ): HomeroomExamPostponedList!
  }

  type HomeroomList {
    lopChuNhiem: [HomeroomListItem!]!
  }

  type HomeroomListItem {
    maSH: String!
    heDaoTao: String!
    khoa: Int!
  }

  type HomeroomStudentList {
    sinhVien: [HomeroomStudentListItem!]!
  }

  type HomeroomStudentListItem {
    maSV: String!
    tenSV: String!
    maCN: String
    tinhTrang: String!
    gpa4: Float
    gpa10: Float
    sdt: String!
    lienHe: [Contact!]
  }

  type Contact {
    mxh: String!
    url: String!
  }

  type HomeroomDetail {
    tenGV: String!
    soLuongSV: Int!
  }

  type HomeroomTermList {
    hocKyNamHoc: [HomeroomTermListItem!]!
  }

  type HomeroomTermListItem {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }

  type HomeroomFailList {
    dsRotMon: [HomeroomFailListItem!]!
  }

  type HomeroomFailListItem {
    maSV: String!
    tenSV: String!
    tenMH: String!
    tenLopHP: String!
    dtb: Float!
    vang: Boolean!
  }

  type HomeroomNotEnrolledList {
    khongDangKy: [HomeroomNotEnrolledListItem!]!
  }

  type HomeroomNotEnrolledListItem {
    maSV: String!
    tenSV: String!
  }

  type HomeroomPostponeExamList {
    hoanThi: [HomeroomPostponeExamListItem!]!
  }

  type HomeroomPostponeExamListItem {
    maSV: String!
    tenSV: String!
    tenMH: String!
    tenLopHP: String!
  }

  type HomeroomOverviewReport {
    siSo: HomeroomNumberOverview!
    hocTap: HomeroomLearnOverview!
    drl: HomeroomTrainingPointOverview!
  }

  type HomeroomNumberOverview {
    tong: Int!
    nam: Int!
    nu: Int!
  }

  type HomeroomLearnOverview {
    xuatSac: Int
    gioi: Int
    kha: Int
    trungBinhKha: Int
    trungBinh: Int
    yeu: Int
    chungChiNgoaiNgu: Int
  }

  type HomeroomTrainingPointOverview {
    xuatSac: Int
    gioi: Int
    kha: Int
    trungBinhKha: Int
    trungBinh: Int
    yeu: Int
  }

  type HomeroomFinalResultList {
    danhSachKetQua: [HomeroomFinalResultListItem!]!
  }

  type HomeroomFinalResultListItem {
    maSV: String!
    hoTen: String!
    dtb: Float
    xepLoai: String
  }

  type HomeroomExamAbsentList {
    danhSachVangThi: [HomeroomExamAbsentListItem!]!
  }

  type HomeroomExamAbsentListItem {
    maSV: String!
    hoTen: String!
    monHoc: String
    lopHP: String
  }

  type HomeroomExamPostponedList {
    danhSachHoanThi: [HomeroomExamPostponedListItem!]!
  }

  type HomeroomExamPostponedListItem {
    maSV: String!
    hoTen: String!
    monHoc: String
    lopHP: String
  }
`;

export default homeroomTypeDefs;
