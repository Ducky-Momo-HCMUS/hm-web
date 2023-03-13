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
import { STUDENT_SCORE_PAGE_SIZE } from '../../../constants';
import {
  MOCK_CLASSROOM_1_COURSE_1_TERM,
  MOCK_COURSE_IN_1_TERM,
  MOCK_DATA_STUDENT_SCORES,
} from '../mock/course';
import { MOCK_SCHOOL_YEARS } from '../mock/year';

interface State {
  year: string;
  semester: string;
  courseId: string;
  classroomName: string;
}

function CourseScoreList() {
  const [values, setValues] = useState<State>({
    year: '',
    semester: '',
    courseId: '',
    classroomName: '',
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

  const { studentScoreListLength, studentScoreListData } = useMemo(() => {
    return {
      studentScoreListLength: MOCK_DATA_STUDENT_SCORES.data.length,
      studentScoreListData: MOCK_DATA_STUDENT_SCORES.data,
    };
  }, []);

  return (
    <Box>
      <StyledTitle>Điểm học phần</StyledTitle>
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
        {values.year && values.semester && (
          <StyledFormControl>
            <InputLabel id="course-select-label">Môn học</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              value={values.courseId || ''}
              label="Môn học"
              onChange={handleChange('courseId')}
              sx={{ minWidth: '250px' }}
            >
              {MOCK_COURSE_IN_1_TERM.data.map((item) => (
                <MenuItem value={item.maMH}>{item.tenMH}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}
        {values.courseId && (
          <StyledFormControl>
            <InputLabel id="class-select-label">Lớp học phần</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={values.classroomName || ''}
              label="Lớp học phần"
              onChange={handleChange('classroomName')}
              sx={{ minWidth: '150px' }}
            >
              {MOCK_CLASSROOM_1_COURSE_1_TERM.data.map((item) => (
                <MenuItem value={item.tenLopHP}>{item.tenLopHP}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}
      </AsyncDataRenderer>
      <AsyncDataRenderer loading={false} data={studentScoreListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maSV">MSSV</TableCell>
                  <TableCell key="tenSV">Họ và tên</TableCell>
                  <TableCell key="gk">GK</TableCell>
                  <TableCell key="th">TH</TableCell>
                  <TableCell key="ck">Cộng</TableCell>
                  <TableCell key="khac">Khác</TableCell>
                  <TableCell key="ck">CK</TableCell>
                  <TableCell key="dtr">Tổng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentScoreListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maSV}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.diemGK}</TableCell>
                    <TableCell>{row.diemTH}</TableCell>
                    <TableCell>{row.diemCong}</TableCell>
                    <TableCell>{row.diemKhac}</TableCell>
                    <TableCell>{row.diemCK}</TableCell>
                    <TableCell>{row.dtb}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={studentScoreListLength}
            rowsPerPage={STUDENT_SCORE_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default CourseScoreList;
