import React, { useCallback, useMemo, useState } from 'react';
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
  StyledTitle,
  StyledHeader,
} from '../../../components/styles';
import {
  useStudentAllSubjectsQuery,
  useStudentAllTermsQuery,
  useStudentAveragePointByTermQuery,
  useStudentAveragePointQuery,
  useStudentSubjectsByTermQuery,
  useStudentTrainingPointByTermQuery,
  useStudentTrainingPointQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import { StyledFormControl, StyledStatusBox } from './styles';
import AcademicTableHead from './AcademicTableHead';
import AcademicTableRow from './AcademicTableRow';

interface State {
  term: string;
}

function AcademicReport() {
  const { id = '' } = useParams();
  const [values, setValues] = useState<State>({
    term: 'all',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const { loading: allTermsLoading, data: allTermsData } =
    useStudentAllTermsQuery({
      variables: {
        studentId: id,
      },
    });

  const termsData = useMemo(
    () => allTermsData?.studentAllTerms?.hocKyNamHoc || [],
    [allTermsData?.studentAllTerms?.hocKyNamHoc]
  );

  const { loading: trainingPointByTermLoading, data: trainingPointByTermData } =
    useStudentTrainingPointByTermQuery({
      variables: {
        studentId: id,
        term: Number(values.term),
      },
      skip: values.term === 'all',
    });

  const {
    loading: trainingPointOverallLoading,
    data: trainingPointOverallData,
  } = useStudentTrainingPointQuery({
    variables: {
      studentId: id,
    },
  });

  const trainingPoint = useMemo(() => {
    if (values.term === 'all') {
      return trainingPointOverallData?.studentTrainingPoint;
    }

    return trainingPointByTermData?.studentTrainingPointByTerm;
  }, [
    trainingPointByTermData?.studentTrainingPointByTerm,
    trainingPointOverallData?.studentTrainingPoint,
    values.term,
  ]);

  const trainingPointLoading = useMemo(
    () =>
      values.term === 'all'
        ? trainingPointOverallLoading
        : trainingPointByTermLoading,
    [values.term, trainingPointOverallLoading, trainingPointByTermLoading]
  );

  const { loading: averagePointByTermLoading, data: averagePointByTermData } =
    useStudentAveragePointByTermQuery({
      variables: {
        studentId: id,
        term: Number(values.term),
      },
      skip: values.term === 'all',
    });

  const { loading: averagePointOverallLoading, data: averagePointOverallData } =
    useStudentAveragePointQuery({
      variables: {
        studentId: id,
      },
    });

  const averagePoint = useMemo(() => {
    if (values.term === 'all') {
      return averagePointOverallData?.studentAveragePoint;
    }

    return averagePointByTermData?.studentAveragePointByTerm;
  }, [
    averagePointByTermData?.studentAveragePointByTerm,
    averagePointOverallData?.studentAveragePoint,
    values.term,
  ]);

  const averagePointLoading = useMemo(
    () =>
      values.term === 'all'
        ? averagePointOverallLoading
        : averagePointByTermLoading,
    [values.term, averagePointOverallLoading, averagePointByTermLoading]
  );

  const { loading: allSubjectsLoading, data: allSubjectsData } =
    useStudentAllSubjectsQuery({
      variables: {
        studentId: id,
      },
    });

  const { loading: subjectsByTermLoading, data: subjectsByTermData } =
    useStudentSubjectsByTermQuery({
      variables: {
        studentId: id,
        term: Number(values.term),
      },
      skip: values.term === 'all',
    });

  const subjectsData = useMemo(() => {
    if (values.term === 'all') {
      return allSubjectsData?.studentAllSubjects?.monhoc || [];
    }

    return subjectsByTermData?.studentSubjectsByTerm?.monhoc || [];
  }, [
    allSubjectsData?.studentAllSubjects?.monhoc,
    subjectsByTermData?.studentSubjectsByTerm?.monhoc,
    values.term,
  ]);

  const subjectsLoading = useMemo(
    () => (values.term === 'all' ? allSubjectsLoading : subjectsByTermLoading),
    [values.term, allSubjectsLoading, subjectsByTermLoading]
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
        <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
          <StyledFormControl>
            <InputLabel id="semester-select-label">Học kỳ - năm học</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={values.term}
              label="Học kỳ - năm học"
              onChange={handleChange('term')}
            >
              <MenuItem key="all" value="all">
                Tất cả
              </MenuItem>
              {termsData.map((item) => (
                <MenuItem key={item.maHK} value={item.maHK.toString()}>
                  HK{item.hocKy} {item.namHocBD}-{item.namHocBD + 1}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>

        <StyledStatusBox>
          <AsyncDataRenderer
            loading={trainingPointLoading}
            data={trainingPoint}
          >
            <Button>
              ĐRL: {trainingPoint?.drl} | {trainingPoint?.xepLoai}
            </Button>
          </AsyncDataRenderer>
          <AsyncDataRenderer loading={averagePointLoading} data={averagePoint}>
            <Button>
              ĐTB: {averagePoint?.dtbTong} | {averagePoint?.xepLoai}
            </Button>
          </AsyncDataRenderer>
        </StyledStatusBox>
        <Button variant="contained">Xuất phiếu điểm</Button>
      </Box>
      <AsyncDataRenderer loading={subjectsLoading} data={subjectsData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <StyledHeader>Các môn đã đăng ký</StyledHeader>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <AcademicTableHead />
              <TableBody>
                {subjectsData.map((row, index) => (
                  <AcademicTableRow data={row} index={index + 1} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </AsyncDataRenderer>
    </>
  );
}

export default AcademicReport;
