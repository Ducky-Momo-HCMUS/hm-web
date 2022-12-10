import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';

import ClassTable from '../../ClassDetail/ClassTable';
import { MISS_EXAM_LIST, POSTPONE_EXAM_LIST } from '../../../mocks';

const missExamColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'tenMH', label: 'Môn học' },
  { id: 'maLopHP', label: 'Lớp HP' },
];

const ROWS_PER_PAGE = 5;

interface Page {
  missExam: number;
  postponeExam: number;
}

function PostponeExam() {
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
        data={MISS_EXAM_LIST}
        page={page.missExam}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangeMissExamPage}
        hasFilter={false}
      />
      <Box sx={{ height: '2rem' }}> </Box>
      <ClassTable
        title="Danh sách hoãn thi"
        columns={missExamColumns}
        data={POSTPONE_EXAM_LIST}
        page={page.postponeExam}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangePostponeExamPage}
        hasFilter={false}
      />
    </Box>
  );
}

export default PostponeExam;
