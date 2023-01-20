import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledBreadCrumbs, StyledTitle } from '../../../components/styles';
import { ACADEMIC_INFO } from '../../../mocks';

import AcademicInfo from './AcademicInfo';
import AcademicResult from './AcademicResult';

function AcademicOverview() {
  const { id } = useParams();
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
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Typography color="text.primary">
            {id} - Nguyễn Ngọc Thanh Tâm
          </Typography>
          <Typography color="text.primary">Kết quả học tập</Typography>
        </StyledBreadCrumbs>
        <Button variant="contained">Xuất phiếu điểm</Button>
      </Box>
      <Box mt={3}>
        <AcademicInfo infoList={ACADEMIC_INFO} />
        <AcademicResult />
      </Box>
    </>
  );
}

export default AcademicOverview;
