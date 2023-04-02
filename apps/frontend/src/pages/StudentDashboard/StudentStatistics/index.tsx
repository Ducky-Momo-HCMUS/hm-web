import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import {
  StyledBreadCrumbs,
  StyledStickyBox,
  StyledTableCell,
  StyledTitle,
} from '../../../components/styles';
import { renderGPA10WithProperColor } from '../../../utils';
import { useStudentStatisticsQuery } from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import StudentStatisticsHeader from './StudentStatisticsHeader';

function StudentStatistics() {
  const { id = '' } = useParams();

  const {
    loading: studentStatisticsLoading,
    data: { studentStatistics = [] } = {},
  } = useStudentStatisticsQuery({
    variables: {
      studentId: id,
    },
  });

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
      <AsyncDataRenderer
        loading={studentStatisticsLoading}
        data={studentStatistics}
      >
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <StudentStatisticsHeader />
              <TableBody>
                {studentStatistics.map((item, index) => (
                  <TableRow hover tabIndex={-1} key={item.namHocBD}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {item.namHocBD} - {item.namHocBD + 1}
                    </TableCell>
                    <TableCell>{item.hocky}</TableCell>
                    <StyledTableCell>
                      {renderGPA10WithProperColor(item.dtb as number)}
                    </StyledTableCell>
                    <TableCell>{item.drl || 'Chưa có'}</TableCell>
                    <TableCell>{item.soTC}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </AsyncDataRenderer>
    </>
  );
}

export default StudentStatistics;
