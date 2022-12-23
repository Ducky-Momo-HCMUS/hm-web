import { gql } from 'apollo-server-express';

const studentTypeDefs = gql`
  extend type Query {
    subjectsByTerm(studentId: String!, term: Int!): [Subject!]
    allSubjects(studentId: String!): [Subject!]
    trainingPointByTerm(studentId: String!, term: Int!): TrainingPoint!
    allTerms(studentId: String!): [Term!]
  }

  type Subject {
    maMH: String!
    tenMH: String!
    tenLopHP: String!
    dtb: Float
    gvlt: String!
    gvth: String!
    tinhTrang: String!
  }

  type TrainingPoint {
    drl: Int!
    xepLoai: String!
  }

  type Term {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }
`;

export default studentTypeDefs;
