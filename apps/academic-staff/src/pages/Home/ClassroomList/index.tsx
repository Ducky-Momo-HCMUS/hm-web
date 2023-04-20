import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Autocomplete,
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
  TableRow,
  TextField,
} from '@mui/material';

import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import { StyledAutocompleteBox, StyledFormControl } from '../styles';
import { MenuProps } from '../../../constants';
import {
  useClassroomListLazyQuery,
  useCourseListQuery,
  useTermListQuery,
} from '../../../generated-types';
import { groupTermsByYear } from '../ImportFile/utils';

interface State {
  year: string;
  semester: string;
  courseId: string;
}

function ClassroomList() {
  const [values, setValues] = useState<State>({
    year: '',
    semester: '',
    courseId: '',
  });

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
      fetchPolicy: 'no-cache',
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
  // const [
  //   getClassroomScoreList,
  //   { loading: classroomScoreListLoading, data: classroomScoreListData },
  // ] = useClassroomScoreListLazyQuery();

  // const { studentScoreListLength, studentScoreList } = useMemo(() => {
  //   return {
  //     studentScoreListLength:
  //       classroomScoreListData?.classroomScoreList.total || 0,
  //     studentScoreList: classroomScoreListData?.classroomScoreList.data || [],
  //   };
  // }, [
  //   classroomScoreListData?.classroomScoreList.data,
  //   classroomScoreListData?.classroomScoreList.total,
  // ]);

  const termId = useMemo(
    () => (values.semester ? Number(values.semester) : Number(initialTerm)),
    [initialTerm, values.semester]
  );

  const subjectId = useMemo(
    () => values.courseId || courseList[0]?.maMH,
    [courseList, values.courseId]
  );

  useEffect(() => {
    if (termId && subjectId) {
      getClassroomList({
        variables: {
          termId,
          subjectId,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [subjectId, getClassroomList, termId]);

  // const classroomId = useMemo(
  //   () =>
  //     values.classroomId ? Number(values.classroomId) : classroomList[0]?.maHP,
  //   [classroomList, values.classroomId]
  // );

  // useEffect(() => {
  //   if (classroomId) {
  //     getClassroomScoreList({
  //       variables: {
  //         id: classroomId,
  //         termId,
  //         page: page + 1,
  //         size: STUDENT_SCORE_PAGE_SIZE,
  //       },
  //       fetchPolicy: 'no-cache',
  //     });
  //   }
  // }, [classroomId, getClassroomScoreList, page, termId]);

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Lớp học phần</StyledTitle>
        <Box display="flex" alignItems="center">
          <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
            <StyledFormControl sx={{ marginRight: '1rem' }}>
              <InputLabel id="year-select-label">Năm học</InputLabel>
              <Select
                labelId="year-select-label"
                id="year-select"
                value={values.year || initialYear}
                label="Năm học"
                onChange={handleChange('year')}
                MenuProps={MenuProps}
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
                MenuProps={MenuProps}
              >
                {terms.map((item) => (
                  <MenuItem value={item.maHK}>{item.hocKy}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </AsyncDataRenderer>

          <AsyncDataRenderer loading={courseListLoading} data={courseListData}>
            <StyledAutocompleteBox>
              <Autocomplete
                sx={{ width: 300 }}
                disablePortal
                autoHighlight
                options={courseList}
                onChange={(event, newValue) => {
                  setValues((v) => ({
                    ...v,
                    courseId: newValue?.maMH || '',
                  }));
                }}
                value={courseList.find((course) => course.maMH === subjectId)}
                getOptionLabel={(option) => option.tenMH}
                renderInput={(params) => (
                  <TextField {...params} label="Môn học" />
                )}
              />
            </StyledAutocompleteBox>
          </AsyncDataRenderer>
        </Box>
      </StyledStickyBox>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={classroomListLoading}
          data={classroomListData}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maSV">Mã môn học</TableCell>
                  <TableCell key="tenSV">Tên môn học</TableCell>
                  <TableCell key="gk">Lớp học phần</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classroomList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maHP}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.monHoc?.maMH ?? ''}</TableCell>
                    <TableCell>{row.monHoc?.tenMH ?? ''}</TableCell>
                    <TableCell>{row.tenLopHP}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={studentScoreListLength}
            rowsPerPage={CLASSROOM_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          /> */}
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default ClassroomList;
