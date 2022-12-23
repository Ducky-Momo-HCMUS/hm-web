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
    studentAllTerms(studentId: String!): StudentAllTerms!
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

  type StudentTerm {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }
`;

export default studentTypeDefs;
