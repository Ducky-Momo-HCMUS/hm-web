import { gql } from 'apollo-server-express';

const noteTypeDefs = gql`
  extend type Query {
    noteDetail(noteId: String!): NoteDetail!
  }

  type NoteDetail {
    maGC: String!
    tag: [String]!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String!
    hinhAnh: [NoteImage!]!
  }

  type NoteImage {
    stt: Int!
    url: String!
  }
`;

export default noteTypeDefs;
