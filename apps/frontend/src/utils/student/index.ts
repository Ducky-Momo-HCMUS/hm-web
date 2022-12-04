import { HomeroomStudentListItem } from '../../generated-types';

export const mapStudentDataToTable = (data: HomeroomStudentListItem) => {
  return {
    ...data,
    contact: {
      sdt: data.sdt,
      lienHe: data.lienHe,
    },
  };
};
