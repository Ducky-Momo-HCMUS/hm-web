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
import { MenuProps, TRAINING_POINT_PAGE_SIZE } from '../../../constants';
import {
  useStudentTrainingPointListLazyQuery,
  useTermListQuery,
} from '../../../generated-types';
import { groupTermsByYear } from '../ImportFile/utils';

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

  const [
    getTraningPointList,
    { loading: trainingPointListLoading, data: trainingPointListData },
  ] = useStudentTrainingPointListLazyQuery();

  const { trainingPointListLength, trainingPointList } = useMemo(() => {
    return {
      trainingPointListLength:
        trainingPointListData?.studentTrainingPointList.total || 0,
      trainingPointList:
        trainingPointListData?.studentTrainingPointList.data || [],
    };
  }, [
    trainingPointListData?.studentTrainingPointList.data,
    trainingPointListData?.studentTrainingPointList.total,
  ]);

  useEffect(() => {
    getTraningPointList({
      variables: {
        termId: values.semester ? Number(values.semester) : Number(initialTerm),
        page: page + 1,
        size: TRAINING_POINT_PAGE_SIZE,
      },
    });
  }, [getTraningPointList, initialTerm, page, values.semester]);

  return (
    <Box>
      <StyledTitle>Điểm rèn luyện</StyledTitle>
      <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
        <StyledFormControl>
          <InputLabel id="year-select-label">Năm học</InputLabel>
          <Select
            sx={{ marginRight: '1rem' }}
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
        <StyledFormControl>
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
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={trainingPointListLoading}
          data={trainingPointList}
        >
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
                {trainingPointList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maSV}>
                    <TableCell>
                      {page * TRAINING_POINT_PAGE_SIZE * index + 1}
                    </TableCell>
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
            rowsPerPageOptions={[]}
            rowsPerPage={TRAINING_POINT_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default TrainingPointList;
