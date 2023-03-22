import React from 'react';
import { Box } from '@mui/material';

import ClassTable from '../../ClassDetail/ClassTable';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

const missExamColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'hoTen', label: 'Họ và tên' },
  { id: 'monHoc', label: 'Môn học' },
];

const ROWS_PER_PAGE = 5;

interface HomeroomMappedPostponeExamListItem {
  maSV: string;
  tenSV: string;
  tenMH: string;
}

interface PostponeExamProps {
  homeroomExamAbsentList: HomeroomMappedPostponeExamListItem[];
  homeroomExamAbsentListLength: number;
  homeroomExamAbsentListLoading: boolean;
  examAbsentPage: number;
  homeroomExamPostponedList: HomeroomMappedPostponeExamListItem[];
  homeroomExamPostponedListLength: number;
  homeroomExamPostponedListLoading: boolean;
  examPostponePage: number;
  handleChangeExamAbsentPage: any;
  handleChangeExamPostponePage: any;
}

function PostponeExam({
  homeroomExamAbsentList,
  homeroomExamAbsentListLength,
  homeroomExamAbsentListLoading,
  homeroomExamPostponedList,
  homeroomExamPostponedListLength,
  homeroomExamPostponedListLoading,
  examAbsentPage,
  examPostponePage,
  handleChangeExamAbsentPage,
  handleChangeExamPostponePage,
}: PostponeExamProps) {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <AsyncDataRenderer
        loading={homeroomExamAbsentListLoading}
        data={homeroomExamAbsentList}
      >
        <ClassTable
          title="Danh sách vắng thi"
          columns={missExamColumns}
          data={homeroomExamAbsentList}
          total={homeroomExamAbsentListLength}
          page={examAbsentPage}
          rowsPerPage={ROWS_PER_PAGE}
          handleChangePage={handleChangeExamAbsentPage}
          hasFilter={false}
        />
      </AsyncDataRenderer>
      <Box sx={{ height: '2rem' }} />
      <AsyncDataRenderer
        loading={homeroomExamPostponedListLoading}
        data={homeroomExamPostponedList}
      >
        <ClassTable
          title="Danh sách hoãn thi"
          columns={missExamColumns}
          data={homeroomExamPostponedList}
          total={homeroomExamPostponedListLength}
          page={examPostponePage}
          rowsPerPage={ROWS_PER_PAGE}
          handleChangePage={handleChangeExamPostponePage}
          hasFilter={false}
        />
      </AsyncDataRenderer>
    </Box>
  );
}

export default PostponeExam;
