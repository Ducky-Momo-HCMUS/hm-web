import { Grid } from '@mui/material';
import React, { useCallback, useState } from 'react';

import {
  LEARNING_REPORT_INFO,
  NUMBER_REPORT_INFO,
  SEMESTER_RESULT_LIST,
  TRAINING_POINT_INFO,
} from '../../../mocks';
import ClassTable from '../../ClassDetail/ClassTable';
import ReportInfo from '../ReportInfo';

const semesterResultColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'dtb', label: 'Điểm trung bình' },
  { id: 'xepLoai', label: 'Xếp loại' },
];

const ROWS_PER_PAGE = 5;

function ClassOverview() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: '0rem', marginBottom: '2rem' }}
      >
        <Grid item xs={4}>
          <ReportInfo header="Sĩ số" infos={NUMBER_REPORT_INFO} />
        </Grid>
        <Grid item xs={4}>
          <ReportInfo header="Học tập" infos={LEARNING_REPORT_INFO} />
        </Grid>
        <Grid item xs={4}>
          <ReportInfo header="Điểm rèn luyện" infos={TRAINING_POINT_INFO} />
        </Grid>
      </Grid>
      <ClassTable
        title="Danh sách kết quả cuối học kỳ"
        columns={semesterResultColumns}
        data={SEMESTER_RESULT_LIST}
        page={page}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangePage}
        hasFilter={false}
      />
    </>
  );
}

export default ClassOverview;
