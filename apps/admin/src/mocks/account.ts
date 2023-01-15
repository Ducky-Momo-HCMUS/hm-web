import { AccountInfo } from '../types';

export const ACCOUNTS_DATA: AccountInfo[] = [
  {
    email: 'nnttam@gmail.com',
    type: 'Giáo viên chủ nhiệm',
    status: 'Hoạt động',
  },
  {
    email: 'lnhphuc@gmail.com',
    type: 'Giáo vụ',
    status: 'Hoạt động',
  },
  {
    email: 'nttchau@gmail.com',
    type: 'Giáo vụ, Giáo viên chủ nhiệm',
    status: 'Hoạt động',
  },
  {
    email: 'nhathu@gmail.com',
    type: 'Giáo vụ',
    status: 'Không hoạt động',
  },
];

export const ACCOUNT_TYPES = [
  'Giáo viên chủ nhiệm',
  'Giáo vụ',
  'Giáo vụ, Giáo viên chủ nhiệm',
];

export const ACCOUNT_STATUSES = ['Hoạt động', 'Không hoạt động'];
