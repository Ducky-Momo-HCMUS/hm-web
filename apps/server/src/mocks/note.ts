import { NoteDetail, NoteList } from '../generated-types';

export const NOTE_DETAIL = {
  maGC: 1,
  tag: ['Học tập'],
  tieuDe: 'Ghi chú ngày 31/12/2022',
  noiDung: 'Cần cải thiện nha',
  thoiGianTao: '31/12/2022 15:11',
  thoiGianSua: '31/12/2022 15:11',
  hinhAnh: [
    {
      stt: 1,
      url: 'https://picsum.photos/200',
    },
    {
      stt: 2,
      url: 'https://picsum.photos/200',
    },
  ],
} as NoteDetail;

export const NOTE_LIST = {
  danhSachGhiChu: [
    {
      maGC: 1,
      tag: ['Học tập'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
    {
      maGC: 2,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 01/01/2023',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
    {
      maGC: 3,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 02/01/2023',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
    {
      maGC: 4,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 03/01/2023',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
    {
      maGC: 5,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 04/01/2023',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
    {
      maGC: 6,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 05/01/2023',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
      maSV: '19127039',
    },
  ],
} as NoteList;
