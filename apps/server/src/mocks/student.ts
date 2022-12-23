import {
  StudentAllSubjects,
  StudentAllTerms,
  StudentSubject,
  StudentSubjectsByTerm,
  StudentTerm,
  StudentTrainingPoint,
} from '../generated-types';

export const SUBJECTS_BY_TERM = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: 8.0,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
  ] as StudentSubject[],
} as StudentSubjectsByTerm;

export const ALL_SUBJECTS = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
  ] as StudentSubject[],
} as StudentAllSubjects;

export const TRAINING_POINT = {
  drl: 9,
  xepLoai: 'Giỏi',
} as StudentTrainingPoint;

export const ALL_TERMS = {
  hocKyNamHoc: [
    { maHK: 1, hocKy: 1, namHocBD: 2019 },
    { maHK: 2, hocKy: 2, namHocBD: 2019 },
    { maHK: 3, hocKy: 3, namHocBD: 2019 },
    { maHK: 4, hocKy: 1, namHocBD: 2020 },
    { maHK: 5, hocKy: 2, namHocBD: 2020 },
  ] as StudentTerm[],
} as StudentAllTerms;
