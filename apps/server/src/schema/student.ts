import { gql } from 'apollo-server-express';

const studentTypeDefs = gql`
  extend type Query {
    studentSubjectsByTerm(studentId: String!, term: Int!): [StudentSubject!]!
    studentTrainingPointByTerm(
      studentId: String!
      term: Int!
    ): StudentTrainingPoint!
    studentAveragePointByTerm(
      studentId: String!
      term: Int!
    ): StudentAveragePoint!
    studentAllTerms(studentId: String!): [StudentTerm!]!
    studentDetail(studentId: String!): StudentDetail!
    studentParentInfoList(
      studentId: String!
      page: Int!
      size: Int!
    ): StudentParentInfoList!
    studentNoteList(
      studentId: String!
      tieuDe: String
      maTag: Int
      page: Int!
      size: Int!
    ): StudentNoteList!
    studentOverviewResult(studentId: String!): StudentOverviewResult
    studentDetailSubjectsResult(
      studentId: String!
      subject: String!
    ): StudentDetailSubjectsResult!
    studentEnrolledList(
      termId: Int!
      page: Int!
      size: Int!
    ): StudentEnrolledList!
    studentNotEnrolledList(
      termId: Int!
      page: Int!
      size: Int!
    ): StudentNotEnrolledList!
    studentTrainingPointList(
      termId: Int!
      page: Int!
      size: Int!
    ): StudentTrainingPointList!
    studentPostponeList(
      termId: Int!
      page: Int!
      size: Int!
    ): StudentPostponeList!
    studentAbsentList(termId: Int!, page: Int!, size: Int!): StudentAbsentList!
  }

  extend type Mutation {
    studentAddContact(
      studentId: String!
      payload: StudentAddContactInput!
    ): StudentContactResponse!
    studentEditContact(
      contactId: Int!
      payload: StudentEditContactInput!
    ): StudentContactResponse!
    studentDeleteContact(contactId: Int!): StudentDeleteContactResponse!
    studentAddParentInfo(
      studentId: String!
      payload: StudentAddParentInfoInput!
    ): StudentParentInfo!
    studentEditParentInfo(
      parentId: Int!
      payload: StudentEditParentInfoInput!
    ): StudentParentInfo!
    studentDeleteParentInfo(parentId: Int!): StudentDeleteParentInfoResponse!
  }

  type StudentAbsentList {
    total: Int!
    data: [StudentAbsentListItem!]!
  }

  type StudentAbsentListItem {
    maSV: String!
    tenSV: String!
    maMH: String!
    tenMH: String!
  }

  type StudentPostponeList {
    total: Int!
    data: [StudentPostponeListItem!]!
  }

  type StudentPostponeListItem {
    maSV: String!
    tenSV: String!
    maMH: String!
    tenMH: String!
  }

  type StudentTrainingPointList {
    total: Int!
    data: [StudentTrainingPointListItem!]!
  }

  type StudentTrainingPointListItem {
    maSV: String!
    tenSV: String!
    drl: Int!
    xepLoai: String!
  }

  type StudentEnrolledList {
    total: Int!
    data: [StudentEnrolledListItem!]!
  }

  type StudentEnrolledListItem {
    maSV: String!
    tenSV: String!
    maMH: String!
    tenMH: String!
    tenLopHP: String!
  }

  type StudentNotEnrolledList {
    total: Int!
    data: [StudentNotEnrolledListItem!]!
  }

  type StudentNotEnrolledListItem {
    maSV: String!
    tenSV: String!
    maSH: String!
  }

  type StudentSubject {
    maMH: String!
    tenMH: String!
    tenLopHP: String!
    tinhTrang: String!
    diemGK: Float
    diemTH: Float
    diemCong: Float
    diemKhac: Float
    diemCK: Float
    dtb: Float
  }

  type StudentTrainingPoint {
    drl: Int!
    xepLoai: String!
  }

  type StudentAveragePoint {
    dtbTong: Float!
    xepLoai: String!
  }

  type StudentTerm {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }

  type StudentContact {
    maLHSV: Int!
    mxh: String!
    url: String!
  }

  type StudentDetail {
    maSV: String!
    tenSV: String!
    gioiTinh: Int!
    dob: String!
    emailSV: String!
    emailCaNhan: String!
    sdt: String!
    tenCN: String
    gpa_4: Float
    gpa_10: Float
    ngoaiNgu: Boolean!
    tinhTrang: String!
    maSH: String!
    xepLoai: String
    lienHeSV: [StudentContact!]
  }

  type StudentParentInfoList {
    total: Int!
    data: [StudentParentInfo!]!
  }

  type StudentParentInfo {
    maPH: Int!
    tenPH: String!
    quanHe: String!
    sdt: String!
    sua: Boolean!
    lienHePH: [StudentParentContact!]!
  }

  type StudentParentContact {
    maLHPH: Int
    mxh: String!
    url: String!
  }

  input StudentAddContactInput {
    mxh: String!
    url: String!
  }

  input StudentEditContactInput {
    mxh: String!
    url: String!
  }

  type StudentContactResponse {
    maLHSV: Int!
    maSV: String!
    mxh: String!
    url: String!
  }

  type StudentDeleteContactResponse {
    status: Int!
  }

  input StudentParentContactInput {
    mxh: String!
    url: String!
    maLHPH: Int
  }

  input StudentAddParentInfoInput {
    tenPH: String!
    quanHe: String!
    sdt: String!
    lienHePH: [StudentParentContactInput!]!
  }

  input StudentEditParentInfoInput {
    tenPH: String!
    quanHe: String!
    sdt: String!
    lienHePH: [StudentParentContactInput!]!
  }

  type StudentDeleteParentInfoResponse {
    status: Int!
  }

  type StudentNoteList {
    total: Int!
    data: [StudentNote!]!
  }

  type StudentNote {
    maGC: Int!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String!
    ghiChuTag: [StudentTag!]!
  }

  type StudentTag {
    maTag: Int!
  }

  type StudentOverviewResult {
    tenCN: String!
    daiCuong: Int!
    coSoNganh: Int!
    batBuocChuyenNganh: Int!
    tuChonTuDo: Int!
    tuChonChuyenNganh: Int!
    totNghiep: Int!
    tongTC: Int!
    dtb: Float!
  }

  type StudentDetailSubjectsResult {
    tichLuy: Int!
    monHoc: [SubjectDetailResult!]!
  }

  type SubjectDetailResult {
    maMH: String!
    tenMH: String!
    soTC: Int!
    namHoc: Int!
    hocKy: Int!
    dtb: Float!
  }
`;

export default studentTypeDefs;
