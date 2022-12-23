import { Subject, TrainingPoint } from '../generated-types';

export const SUBJECTS_BY_TERM = [
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
] as Subject[];

export const ALL_SUBJECTS = [
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
] as Subject[];

export const TRAINING_POINT = {
  drl: 9,
  xepLoai: 'Giỏi',
} as TrainingPoint;

export const ALL_TERMS = [
  { maHK: 1, hocKy: 1, namHocBD: 2019 },
  { maHK: 2, hocKy: 2, namHocBD: 2019 },
  { maHK: 3, hocKy: 3, namHocBD: 2019 },
  { maHK: 4, hocKy: 1, namHocBD: 2020 },
  { maHK: 5, hocKy: 2, namHocBD: 2020 },
];
