import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import {
  StyledBreadCrumbs,
  StyledStickyBox,
  StyledTitle,
} from '../../../components/styles';

import StudentStatisticsHeader from './StudentStatisticsHeader';
import StudentStatisticsRow from './StudentStatisticsRow';

function StudentStatistics() {
  const { id = '' } = useParams();

  return (
    <>
      <StyledStickyBox sx={{ top: '63px' }}>
        <StyledTitle variant="h1">Thống kê tình hình</StyledTitle>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <StyledBreadCrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Typography color="text.primary">{id}</Typography>
            <Typography color="text.primary">Thống kê tình hình</Typography>
          </StyledBreadCrumbs>
        </Box>
      </StyledStickyBox>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '55vh' }}>
          <Table stickyHeader>
            <StudentStatisticsHeader />
            <TableBody>
              <StudentStatisticsRow
                data={{
                  maSV: '19127568',
                  namHoc: '2019-2020',
                  hocKy: 1,
                  dtb: 4.0,
                  drl: 90,
                  soTinChi: 56,
                }}
                index={1}
              />
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={}
          rowsPerPage={STUDENT_LIST_PAGE_SIZE}
          page={page}
          onPageChange={handleChangePage}
        /> */}
      </Paper>
    </>
  );
}

export default StudentStatistics;
