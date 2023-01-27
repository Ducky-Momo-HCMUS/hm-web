import { Box, Button, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

import { StyledBreadCrumbs, StyledTitle } from '../../../components/styles';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { useStudentOverviewResultQuery } from '../../../generated-types';

import AcademicInfo from './AcademicInfo';
import AcademicResult from './AcademicResult';

const OVERVIEW_CONTENT = [
  { title: 'Chuyên ngành', goal: '' },
  { title: 'Giáo dục đại cương', goal: '56' },
  { title: 'Kiến thức cơ sở ngành', goal: '38' },
  { title: 'Kiến thức bắt buộc ngành', goal: '16' },
  { title: 'Kiến thức tự chọn ngành', goal: '8' },
  { title: 'Kiến thức tự chọn tự do', goal: '' },
  { title: 'Kiến thức tốt nghiệp', goal: '10' },
  { title: 'Tổng tín chỉ tích luỹ', goal: '138' },
  { title: 'Điểm trung bình', goal: '' },
];

function AcademicOverview() {
  const { id = '' } = useParams();
  const {
    data: studentOverviewResultData,
    loading: studentOverviewResultLoading,
  } = useStudentOverviewResultQuery({
    variables: {
      studentId: id,
    },
  });

  const mappedData = useMemo(() => {
    const data = studentOverviewResultData?.studentOverviewResult;
    if (data) {
      const result = [
        data.tenCN,
        data.daiCuong,
        data.coSoNganh,
        data.chuyenNganh,
        data.tuChonChuyenNganh,
        data.tuChonTuDo,
        data.totNghiep,
        data.tongTC,
        data.dtb,
      ];
      return OVERVIEW_CONTENT.map((item, index) => ({
        title: OVERVIEW_CONTENT[index].title,
        content:
          OVERVIEW_CONTENT[index].goal.length > 0
            ? `${result[index]}/${OVERVIEW_CONTENT[index].goal}`
            : `${result[index]}`,
      }));
    }
    return [];
  }, [studentOverviewResultData?.studentOverviewResult]);

  return (
    <>
      <StyledTitle variant="h1">Kết quả học tập</StyledTitle>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledBreadCrumbs sx={{ marginBottom: 0 }} aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Typography color="text.primary">{id}</Typography>
          <Typography color="text.primary">Kết quả học tập</Typography>
        </StyledBreadCrumbs>
        <Button variant="contained">Xuất phiếu điểm</Button>
      </Box>
      <Box mt={3}>
        <AsyncDataRenderer loading={studentOverviewResultLoading}>
          <AcademicInfo infoList={mappedData} />
        </AsyncDataRenderer>
        <AcademicResult />
      </Box>
    </>
  );
}

export default AcademicOverview;
