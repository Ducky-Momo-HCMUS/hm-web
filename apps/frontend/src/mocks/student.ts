import { Contact } from '../generated-types';
import { RegisteredSubjectsData } from '../types';

export const REGISTERED_SUBJECTS_DATA: RegisteredSubjectsData[] = [
  {
    subjectId: 'BAA00102',
    subjectName: 'Kinh tế chính trị Mác - Lênin',
    subjectClass: '19CLC3',
    status: 'Đang học',
    averagePoint: null,
    theoryTeacher: 'Nguyễn Tri Phương',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'BAA00103',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Rớt môn',
    averagePoint: 4.5,
    theoryTeacher: 'Đinh Bá Tiến',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'CSC10003',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Qua môn',
    averagePoint: 5.6,
    theoryTeacher: 'Nguyễn Tiến Trung',
    practiceTeacher: 'Trần Khả Hân',
  },
];

export const STUDENT_CONTACTS_DATA: Contact[] = [
  {
    mxh: 'Nguyen Huy Anh Thu - Facebook',
    url: 'fb',
  },
  {
    mxh: 'Nguyen Huy Anh Thu - Instagram',
    url: 'ins',
  },
];
