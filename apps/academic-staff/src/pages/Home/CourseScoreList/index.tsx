import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
  useClassroomListLazyQuery,
  useClassroomScoreListLazyQuery,
  useCourseListQuery,
  useTermListQuery,
} from '../../../generated-types';
import { groupTermsByYear } from '../ImportFile/utils';

interface State {
  year: string;
  semester: string;
  courseId: string;
  classroomId: string;
}

function CourseScoreList() {
  const [values, setValues] = useState<State>({
    year: '',
    semester: '',
    courseId: '',
    classroomId: '',
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

  const { loading: allTermsLoading, data: allTermsData } = useTermListQuery({});

  const termsData = useMemo(
    () => allTermsData?.termList || [],
    [allTermsData?.termList]
  );

  const mappedData = useMemo(() => groupTermsByYear(termsData), [termsData]);

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { terms } = useMemo(() => {
    const termsByYear = mappedData[values.year || years[years.length - 1]]?.map(
      (data) => ({
        maHK: data.maHK,
        hocKy: data.hocKy,
      })
    );
    return {
      terms: termsByYear || [],
    };
  }, [mappedData, values.year, years]);

  const { initialYear, initialTerm } = useMemo(() => {
    const termsByYear = mappedData[years[years.length - 1]]?.map((data) =>
      data.maHK.toString()
    );
    return {
      initialYear: years[years.length - 1],
      initialTerm: termsByYear?.[termsByYear.length - 1] || '',
    };
  }, [mappedData, years]);

  const { loading: courseListLoading, data: courseListData } =
    useCourseListQuery({
      variables: {
        page: 1,
        size: 1000,
      },
    });
  const courseList = useMemo(
    () => courseListData?.courseList.data || [],
    [courseListData?.courseList.data]
  );

  const [
    getClassroomList,
    { loading: classroomListLoading, data: classroomListData },
  ] = useClassroomListLazyQuery();

  const classroomList = useMemo(
    () => classroomListData?.classroomList || [],
    [classroomListData?.classroomList]
  );
  const [
    getClassroomScoreList,
    { loading: classroomScoreListLoading, data: classroomScoreListData },
  ] = useClassroomScoreListLazyQuery();

  const { studentScoreListLength, studentScoreList } = useMemo(() => {
    return {
      studentScoreListLength:
        classroomScoreListData?.classroomScoreList.total || 0,
      studentScoreList: classroomScoreListData?.classroomScoreList.data || [],
    };
  }, [
    classroomScoreListData?.classroomScoreList.data,
    classroomScoreListData?.classroomScoreList.total,
  ]);

  const termId = useMemo(
    () => (values.semester ? Number(values.semester) : Number(initialTerm)),
    [initialTerm, values.semester]
  );

  useEffect(() => {
    if (termId) {
      getClassroomList({
        variables: {
          termId,
        },
      });
    }
  }, [getClassroomList, termId]);

  const classroomId = useMemo(
    () =>
      values.classroomId ? Number(values.classroomId) : classroomList[0]?.maHP,
    [classroomList, values.classroomId]
  );

  useEffect(() => {
    if (classroomId) {
      getClassroomScoreList({
        variables: {
          id: classroomId,
          termId,
          page: page + 1,
          size: STUDENT_SCORE_PAGE_SIZE,
        },
      });
    }
  }, [classroomId, getClassroomScoreList, page, termId]);

  return (
    <Box>
      <StyledTitle>Điểm học phần</StyledTitle>
      <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
        <StyledFormControl sx={{ marginRight: '1rem' }}>
          <InputLabel id="year-select-label">Năm học</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={values.year || initialYear}
            label="Năm học"
            onChange={handleChange('year')}
          >
            {years.map((item) => (
              <MenuItem value={item}>
                {item} - {Number(item) + 1}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl sx={{ marginRight: '1rem' }}>
          <InputLabel id="semester-select-label">Học kỳ</InputLabel>
          <Select
            labelId="semester-select-label"
            id="semester-select"
            value={values.semester || initialTerm}
            label="Học kỳ"
            onChange={handleChange('semester')}
          >
            {terms.map((item) => (
              <MenuItem value={item.maHK}>{item.hocKy}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </AsyncDataRenderer>
      <AsyncDataRenderer loading={courseListLoading} data={courseList}>
        <StyledFormControl sx={{ marginRight: '1rem' }}>
          <InputLabel id="course-select-label">Môn học</InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            value={values.courseId || courseList[0]?.maMH}
            label="Môn học"
            onChange={handleChange('courseId')}
            sx={{ minWidth: '250px' }}
          >
            {courseList.map((item) => (
              <MenuItem value={item.maMH}>{item.tenMH}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </AsyncDataRenderer>
      <AsyncDataRenderer loading={classroomListLoading} data={classroomList}>
        <StyledFormControl>
          <InputLabel id="class-select-label">Lớp học phần</InputLabel>
          <Select
            labelId="class-select-label"
            id="class-select"
            value={values.classroomId || String(classroomList[0]?.maHP)}
            label="Lớp học phần"
            onChange={handleChange('classroomId')}
            sx={{ minWidth: '150px' }}
          >
            {classroomList.map((item) => (
              <MenuItem value={item.maHP}>{item.tenLopHP}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </AsyncDataRenderer>

      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={classroomScoreListLoading}
          data={studentScoreList}
        >
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
                {studentScoreList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maSV}>
                    <TableCell>
                      {page * STUDENT_SCORE_PAGE_SIZE * index + 1}
                    </TableCell>
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
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default CourseScoreList;
