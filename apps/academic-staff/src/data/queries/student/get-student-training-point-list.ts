import { gql } from '@apollo/client';

export const GET_STUDENT_TRAINING_POINT_LIST = gql`
  query StudentTrainingPointList($termId: Int!, $page: Int!, $size: Int!) {
    studentTrainingPointList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        drl
        xepLoai
      }
    }
  }
`;
