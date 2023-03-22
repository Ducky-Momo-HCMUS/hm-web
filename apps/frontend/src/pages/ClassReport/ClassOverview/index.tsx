import { Grid } from '@mui/material';
import React, { useMemo } from 'react';

import {
  HomeroomFinalResultListItem,
  HomeroomOverviewReport,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import ClassTable from '../../ClassDetail/ClassTable';
import ReportInfo from '../ReportInfo';

const semesterResultColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'dtb', label: 'Điểm trung bình' },
  { id: 'xepLoai', label: 'Xếp loại' },
];

const ROWS_PER_PAGE = 5;
const NUMBER_REPORT_TITLE_LIST = [
  'Tổng số sinh viên',
  'Tổng số sinh viên nam',
  'Tổng số sinh viên nữ',
];
const LEARNING_REPORT_TITLE_LIST = [
  'Xếp loại xuất sắc',
  'Xếp loại giỏi',
  'Xếp loại khá',
  'Xếp loại trung bình',
  'Xếp loại yếu',
  'Xếp loại kém',
  'Chứng chỉ ngoại ngữ',
];
const TRAINING_REPORT_TITLE_LIST = [
  'Xếp loại xuất sắc',
  'Xếp loại giỏi',
  'Xếp loại khá',
  'Xếp loại trung bình',
  'Xếp loại yếu',
  'Xếp loại kém',
];

interface ClassOverviewProps {
  homeroomOverviewReport: HomeroomOverviewReport;
  homeroomFinalResultList: HomeroomFinalResultListItem[];
  homeroomFinalResultListLength: number;
  homeroomFinalResultListLoading: boolean;
  homeroomOverviewReportLoading: boolean;
  page: number;
  handleChangePage: any;
}

function ClassOverview({
  homeroomOverviewReport,
  homeroomFinalResultList,
  homeroomFinalResultListLength,
  homeroomFinalResultListLoading,
  homeroomOverviewReportLoading,
  page,
  handleChangePage,
}: ClassOverviewProps) {
  const { siSo, hocTap, drl } = homeroomOverviewReport;

  const numberReportInfo = useMemo(() => {
    const numberReportContentList = [siSo.tong, siSo.nam, siSo.nu];
    return NUMBER_REPORT_TITLE_LIST.map((item, index) => ({
      title: item,
      value: numberReportContentList[index],
    }));
  }, [siSo.nam, siSo.nu, siSo.tong]);

  const learningReportInfo = useMemo(() => {
    const learningReportContentList = [
      hocTap.xuatSac,
      hocTap.gioi,
      hocTap.kha,
      hocTap.trungBinh,
      hocTap.yeu,
      hocTap.kem,
      hocTap.chungChiNgoaiNgu,
    ];
    return LEARNING_REPORT_TITLE_LIST.map((item, index) => ({
      title: item,
      value: learningReportContentList[index],
    }));
  }, [
    hocTap.chungChiNgoaiNgu,
    hocTap.gioi,
    hocTap.kem,
    hocTap.kha,
    hocTap.trungBinh,
    hocTap.xuatSac,
    hocTap.yeu,
  ]);

  const trainingPointReportInfo = useMemo(() => {
    const trainingPointReportContentList = [
      drl.xuatSac,
      drl.gioi,
      drl.kha,
      drl.trungBinh,
      drl.yeu,
      drl.kem,
    ];
    return TRAINING_REPORT_TITLE_LIST.map((item, index) => ({
      title: item,
      value: trainingPointReportContentList[index],
    }));
  }, [drl.gioi, drl.kem, drl.kha, drl.trungBinh, drl.xuatSac, drl.yeu]);

  return (
    <>
      <AsyncDataRenderer
        loading={homeroomOverviewReportLoading}
        data={homeroomOverviewReport}
      >
        <Grid
          container
          spacing={4}
          sx={{ marginTop: '0rem', marginBottom: '2rem' }}
        >
          <Grid item xs={4}>
            <ReportInfo header="Sĩ số" infos={numberReportInfo} />
          </Grid>
          <Grid item xs={4}>
            <ReportInfo header="Học tập" infos={learningReportInfo} />
          </Grid>
          <Grid item xs={4}>
            <ReportInfo
              header="Điểm rèn luyện"
              infos={trainingPointReportInfo}
            />
          </Grid>
        </Grid>
      </AsyncDataRenderer>
      <ClassTable
        title="Danh sách kết quả cuối học kỳ"
        columns={semesterResultColumns}
        data={homeroomFinalResultList}
        total={homeroomFinalResultListLength}
        loading={homeroomFinalResultListLoading}
        page={page}
        rowsPerPage={ROWS_PER_PAGE}
        handleChangePage={handleChangePage}
        hasFilter={false}
      />
    </>
  );
}

export default ClassOverview;
