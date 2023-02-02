import { Grid } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';

import { LEARNING_REPORT_INFO, TRAINING_POINT_INFO } from '../../../mocks';
import {
  HomeroomFinalResultListItem,
  HomeroomOverviewReport,
} from '../../../generated-types';
import ClassTable from '../../ClassDetail/ClassTable';
import ReportInfo from '../ReportInfo';

const semesterResultColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'hoTen', label: 'Họ và tên' },
  { id: 'dtb', label: 'Điểm trung bình' },
  { id: 'xepLoai', label: 'Xếp loại' },
];

const ROWS_PER_PAGE = 5;
const OVERVIEW_REPORT_TITLE_LIST = [
  'Tổng số sinh viên',
  'Tổng số sinh viên nam',
  'Tổng số sinh viên nữ',
];

interface ClassOverviewProps {
  homeroomOverviewReport: HomeroomOverviewReport;
  homeroomFinalResultList: HomeroomFinalResultListItem[];
}

function ClassOverview({
  homeroomOverviewReport,
  homeroomFinalResultList,
}: ClassOverviewProps) {
  const [page, setPage] = useState(0);
  const { siSo } = homeroomOverviewReport;

  const overviewReportInfo = useMemo(() => {
    const overviewReportContentList = [siSo.tong, siSo.nam, siSo.nu];
    return OVERVIEW_REPORT_TITLE_LIST.map((item, index) => ({
      title: item,
      value: overviewReportContentList[index],
    }));
  }, [siSo.nam, siSo.nu, siSo.tong]);

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
          <ReportInfo header="Sĩ số" infos={overviewReportInfo} />
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
        data={homeroomFinalResultList}
        page={page}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangePage}
        hasFilter={false}
      />
    </>
  );
}

export default ClassOverview;
