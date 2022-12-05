import { NoteItemData } from '../types';

export const ROWS_PER_PAGE = 5;
export const NOTES_LIST: NoteItemData[] = [
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Em này nghỉ học 3 buổi</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập', 'Chuyên cần', 'Phụ huynh'],
  },
  {
    title: 'Tình hình học tập môn cơ sở dữ liệu',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Em này dưới trung bình rất nhiều</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Chuyên cần'],
  },
  {
    title: 'Tâm sự cùng người lạ',
    lastUpdate: '06/11/2022 10:18',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    <h1>I don't know how to learn effectively</h1>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<h3>Mong muốn học tốt hơnnnnnnnnnnn</h3>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập', 'Phụ huynh'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Bị điểm <b>xấu</b></p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, enim dolore qui eaque itaque cupiditate dolor perspiciatis modi laborum consequuntur reprehenderit magnam, explicabo aperiam labore? Excepturi dolorem numquam doloribus dolores!</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Chuyên cần', 'Phụ huynh'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Không có gì</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Chuyên cần'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Không có gì</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, enim dolore qui eaque itaque cupiditate dolor perspiciatis modi laborum consequuntur reprehenderit magnam, explicabo aperiam labore? Excepturi dolorem numquam doloribus dolores!</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập'],
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
    content: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, enim dolore qui eaque itaque cupiditate dolor perspiciatis modi laborum consequuntur reprehenderit magnam, explicabo aperiam labore? Excepturi dolorem numquam doloribus dolores!</p>`,
    images: ['https://picsum.photos/100/100'],
    tags: ['Học tập'],
  },
];
export const API_KEY = '0yf7s1ygposevnas5ey2boi88rautg60xy9zjtwyecbyz0nx';
export const NOTE_EDITOR_CONFIG = {
  height: 400,
  menubar: false,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'code',
  ],
  toolbar:
    'undo redo | blocks | formatselect | ' +
    'bold italic backcolor link | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
};
export const TAGS_OPTIONS = ['Học tập', 'Phụ huynh', 'Chuyên cần'];
