import { gql } from 'apollo-server-express';

const studentTypeDefs = gql`
  extend type Query {
    studentSubjectsByTerm(
      studentId: String!
      term: Int!
    ): StudentSubjectsByTerm!
    studentAllSubjects(studentId: String!): StudentAllSubjects!
    studentTrainingPointByTerm(
      studentId: String!
      term: Int!
    ): StudentTrainingPoint!
    studentTrainingPoint(studentId: String!): StudentTrainingPoint!
    studentAveragePointByTerm(
      studentId: String!
      term: Int!
    ): StudentAveragePoint!
    studentAveragePoint(studentId: String!): StudentAveragePoint!
    studentAllTerms(studentId: String!): StudentAllTerms!
    studentDetail(studentId: String!): StudentDetail!
    studentParentInfoList(studentId: String!): StudentParentInfoList!
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
    studentNoteList(studentId: String!): StudentNoteList!
  }

  type StudentSubjectsByTerm {
    monhoc: [StudentSubject!]!
  }

  type StudentAllSubjects {
    monhoc: [StudentSubject!]!
  }

  type StudentAllTerms {
    hocKyNamHoc: [StudentTerm!]!
  }

  type StudentSubject {
    maMH: String!
    tenMH: String!
    tenLopHP: String!
    dtb: Float
    gvlt: String!
    gvth: String!
    tinhTrang: String!
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
    tenCN: String!
    gpa_4: Float!
    gpa_10: Float!
    ngoaiNgu: Boolean!
    tinhTrang: String!
    maSH: String!
    xepLoai: String!
    lienHeSV: [StudentContact!]!
  }

  type StudentParentInfoList {
    dsPhuHuynh: [StudentParentInfo!]!
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
  type StudentNoteList {
    danhSachGhiChu: [StudentNote!]!
  }

  type StudentNote {
    maGC: String!
    tag: [String]!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String!
  }
`;

export default studentTypeDefs;
