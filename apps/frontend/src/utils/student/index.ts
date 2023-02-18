import _groupBy from 'lodash/groupBy';

import {
  HomeroomListItem,
  HomeroomStudentListItem,
  StudentTerm,
} from '../../generated-types';
import { HomeroomStudentListData } from '../../types';

export const mapStudentDataToTable = (data: HomeroomStudentListItem) => {
  return {
    ...data,
    contact: {
      sdt: data.sdt,
      lienHe: data.lienHeSV,
    },
  } as HomeroomStudentListData;
};

export const groupClassesByYear = (homeroomList: HomeroomListItem[]) => {
  return _groupBy(homeroomList, (homeroom) => homeroom.khoa);
};

export const groupTermsByYear = (termList: StudentTerm[]) => {
  return _groupBy(termList, (term) => term.namHocBD);
};
