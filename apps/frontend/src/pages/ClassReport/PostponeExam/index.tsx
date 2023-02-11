import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';

import ClassTable from '../../ClassDetail/ClassTable';
import { HomeroomExamAbsentListItem } from '../../../generated-types';

const missExamColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'hoTen', label: 'Họ và tên' },
  { id: 'monHoc', label: 'Môn học' },
  { id: 'lopHP', label: 'Lớp học phần' },
];

const ROWS_PER_PAGE = 5;

interface Page {
  missExam: number;
  postponeExam: number;
}

interface HomeroomMappedPostponeExamListItem {
  maSV: string;
  tenSV: string;
  tenMH: string;
}

interface PostponeExamProps {
  homeroomExamAbsentList: HomeroomExamAbsentListItem[];
  homeroomExamPostponedList: HomeroomMappedPostponeExamListItem[];
}

function PostponeExam({
  homeroomExamAbsentList,
  homeroomExamPostponedList,
}: PostponeExamProps) {
  const [page, setPage] = useState<Page>({
    missExam: 0,
    postponeExam: 0,
  });

  const handleChangeMissExamPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, missExam: newPage }));
    },
    []
  );

  const handleChangePostponeExamPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, postponeExam: newPage }));
    },
    []
  );

  return (
    <Box sx={{ marginTop: '2rem' }}>
      <ClassTable
        title="Danh sách vắng thi"
        columns={missExamColumns}
        data={homeroomExamAbsentList}
        page={page.missExam}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangeMissExamPage}
        hasFilter={false}
      />
      <Box sx={{ height: '2rem' }}> </Box>
      <ClassTable
        title="Danh sách hoãn thi"
        columns={missExamColumns}
        data={homeroomExamPostponedList}
        page={page.postponeExam}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangePostponeExamPage}
        hasFilter={false}
      />
    </Box>
  );
}

export default PostponeExam;
