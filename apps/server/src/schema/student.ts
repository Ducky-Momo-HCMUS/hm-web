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

  type StudentDetail {
    maSV: String!
    tenSV: String!
    gioiTinh: Int!
    dob: String!
    emailSV: String!
    emailCaNhan: String!
    sdt: String!
    maCN: String!
    gpa_4: Float!
    gpa_10: Float!
    ngoaiNgu: Boolean!
    tinhTrang: String!
    maSH: String
  }
`;

export default studentTypeDefs;
