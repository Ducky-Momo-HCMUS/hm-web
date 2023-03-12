import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import { TRAINING_POINT_PAGE_SIZE } from '../../../constants';
import { MOCK_TRAINING_POINT_DATA } from '../mock/training-point';
import { MOCK_SCHOOL_YEARS } from '../mock/year';

interface State {
  year: string;
  semester: string;
}

function TrainingPointList() {
  const [values, setValues] = useState<State>({
    year: '',
    semester: '',
  });

  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const { trainingPointListLength, trainingPointListData } = useMemo(() => {
    return {
      trainingPointListLength: MOCK_TRAINING_POINT_DATA.data.length,
      trainingPointListData: MOCK_TRAINING_POINT_DATA.data,
    };
  }, []);

  return (
    <Box>
      <StyledTitle>Điểm rèn luyện</StyledTitle>
      <AsyncDataRenderer loading={false} data={[{}]}>
        <StyledFormControl>
          <InputLabel id="year-select-label">Năm học</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={values.year || ''}
            label="Năm học"
            onChange={handleChange('year')}
          >
            {MOCK_SCHOOL_YEARS.data.map((item) => (
              <MenuItem value={item.namHocBD}>
                {item.namHocBD} - {item.namHocBD + 1}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel id="semester-select-label">Học kỳ</InputLabel>
          <Select
            labelId="semester-select-label"
            id="semester-select"
            value={values.semester || ''}
            label="Học kỳ"
            onChange={handleChange('semester')}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </StyledFormControl>
      </AsyncDataRenderer>
      <AsyncDataRenderer loading={false} data={trainingPointListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maSV">MSSV</TableCell>
                  <TableCell key="tenSV">Họ và tên</TableCell>
                  <TableCell key="drl">Điểm tổng</TableCell>
                  <TableCell key="xepLoai">Xếp loại</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trainingPointListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maSV}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.drl}</TableCell>
                    <TableCell>{row.xepLoai}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={trainingPointListLength}
            rowsPerPage={TRAINING_POINT_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default TrainingPointList;
