import { gql } from 'apollo-server-express';

const homeroomTypeDefs = gql`
  extend type Query {
    homeroomList: HomeroomList!
    homeroomAllList: HomeroomAllList!
    homeroomStudentList(
      homeroomId: String!
      page: Int!
      size: Int!
    ): HomeroomStudentList!
    homeroomDetail(homeroomId: String!): HomeroomDetail!
    homeroomTermList(homeroomId: String!): [HomeroomTermListItem!]!
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
  }

  type HomeroomAllList {
    danhSachLopSH: [String!]!
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
    total: Int!
    data: [HomeroomStudentListItem!]
  }

  type HomeroomStudentListItem {
    maSV: String!
    tenSV: String!
    tenCN: String
    tinhTrang: String!
    gpa4: Float
    gpa10: Float
    sdt: String!
    emailSV: String!
    lienHeSV: [Contact!]
  }

  type Contact {
    mxh: String!
    url: String!
  }

  type TeacherInfo {
    tenGV: String!
  }

  type HomeroomDetail {
    giaoVien: TeacherInfo!
    siSo: Int!
  }

  type HomeroomTermListItem {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }

  type HomeroomFailList {
    total: Int!
    data: [HomeroomFailListItem!]!
  }

  type HomeroomFailListItem {
    dtb: Float!
    vang: Boolean!
    sinhVien: HomeroomFailListStudentInfo!
    lopHocPhan: HomeroomFailListStudentCourse!
  }

  type HomeroomFailListStudentInfo {
    maSV: String!
    tenSV: String!
  }

  type HomeroomFailListStudentCourse {
    tenLopHP: String!
    monHoc: HomeroomFailListSubject!
  }

  type HomeroomFailListSubject {
    tenMH: String!
  }

  type HomeroomNotEnrolledList {
    data: [HomeroomNotEnrolledListItem!]!
  }

  type HomeroomNotEnrolledListItem {
    sinhVien: HomeroomNotEnrolledListStudentInfo!
  }

  type HomeroomNotEnrolledListStudentInfo {
    maSV: String!
    tenSV: String!
  }

  type HomeroomPostponeExamList {
    data: [HomeroomPostponeExamListItem!]!
  }

  type HomeroomPostponeExamListItem {
    sinhVien: HomeroomPostponeExamListStudentInfo!
    monHoc: HomeroomPostponeExamListSubject!
  }

  type HomeroomPostponeExamListStudentInfo {
    maSV: String!
    tenSV: String!
  }

  type HomeroomPostponeExamListSubject {
    tenMH: String!
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
    data: [HomeroomExamAbsentListItem!]!
  }

  type HomeroomExamAbsentListItem {
    sinhVien: HomeroomExamAbsentListStudentInfo!
    monHoc: HomeroomExamAbsentListSubject!
  }

  type HomeroomExamAbsentListStudentInfo {
    maSV: String!
    tenSV: String!
  }

  type HomeroomExamAbsentListSubject {
    tenMH: String!
  }
`;

export default homeroomTypeDefs;
