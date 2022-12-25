import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  StyledBreadCrumbs,
  StyledHeader,
  StyledTitle,
} from '../../../components/styles';
import { REGISTERED_SUBJECTS_DATA } from '../../../mocks';

import { StyledFormControl, StyledStatusBox } from './styles';
import AcademicTableHead from './AcademicTableHead';
import AcademicTableRow from './AcademicTableRow';

interface State {
  semester: string;
}

function AcademicReport() {
  const { id } = useParams();
  const [values, setValues] = useState<State>({
    semester: 'all',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <>
      <StyledTitle variant="h1">Tình hình học tập</StyledTitle>
      <StyledBreadCrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Trang chủ
        </Link>
        <Typography color="text.primary">
          {id} - Nguyễn Ngọc Thanh Tâm
        </Typography>
        <Typography color="text.primary">Tình hình học tập</Typography>
      </StyledBreadCrumbs>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledFormControl>
          <InputLabel id="semester-select-label">Học kỳ - năm học</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={values.semester}
            label="Học kỳ - năm học"
            onChange={handleChange('semester')}
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="1-2019">HK1 2019-2020</MenuItem>
            <MenuItem value="2-2019">HK2 2019-2020</MenuItem>
            <MenuItem value="3-2019">HK3 2019-2020</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledStatusBox>
          <Button>ĐRL: 99 | GIỎI</Button>
          <Button>ĐTB: 8.9 | GIỎI</Button>
        </StyledStatusBox>
        <Button variant="contained">Xuất phiếu điểm</Button>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <StyledHeader>Các môn đã đăng ký</StyledHeader>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <AcademicTableHead />
            <TableBody>
              {REGISTERED_SUBJECTS_DATA.map((row, index) => (
                <AcademicTableRow data={row} index={index + 1} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default AcademicReport;
