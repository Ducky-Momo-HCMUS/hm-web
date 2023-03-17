import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { MOCK_DATA_EXPORT } from '../../../components/ScorePDFTemplate/mock';
import ScorePDFTemplate from '../../../components/ScorePDFTemplate';
import {
  StyledBreadCrumbs,
  StyledTitle,
  StyledHeader,
  StyledStickyBox,
} from '../../../components/styles';
import {
  useStudentAllTermsQuery,
  useStudentAveragePointByTermQuery,
  useStudentSubjectsByTermQuery,
  useStudentTrainingPointByTermQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { groupTermsByYear } from '../../../utils';
import { StudentDetailResult } from '../../../types';

import { StyledFormControl, StyledStatusBox } from './styles';
import AcademicTableHead from './AcademicTableHead';
import AcademicTableRow from './AcademicTableRow';
import PointTableHead from './PointTableHead';
import PointTableRow from './PointTableRow';

interface State {
  year: string;
  term: string;
}

const STUDENT_DETAIL_RESULT = [
  {
    maMH: 'CSC10005',
    tenMH: 'Kỹ thuật máy tính',
    lopHP: '19CLC4',
    diemGK: 5.4,
    diemTH: 4.5,
    diemCK: 6.5,
    diemTong: 5.8,
  },
] as StudentDetailResult[];

function AcademicReport() {
  const { id = '' } = useParams();
  const [values, setValues] = useState<State>({
    year: '',
    term: '',
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
    () => allTermsData?.studentAllTerms || [],
    [allTermsData?.studentAllTerms]
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

  const { data: trainingPointByTermData } = useStudentTrainingPointByTermQuery({
    variables: {
      studentId: id,
      term: values.term ? Number(values.term) : Number(initialTerm),
    },
    skip: allTermsLoading,
  });

  const trainingPoint = useMemo(() => {
    return trainingPointByTermData?.studentTrainingPointByTerm;
  }, [trainingPointByTermData?.studentTrainingPointByTerm]);

  const { data: averagePointByTermData } = useStudentAveragePointByTermQuery({
    variables: {
      studentId: id,
      term: values.term ? Number(values.term) : Number(initialTerm),
    },
    skip: allTermsLoading,
  });

  const averagePoint = useMemo(() => {
    return averagePointByTermData?.studentAveragePointByTerm;
  }, [averagePointByTermData?.studentAveragePointByTerm]);

  const { loading: subjectsByTermLoading, data: subjectsByTermData } =
    useStudentSubjectsByTermQuery({
      variables: {
        studentId: id,
        term: values.term ? Number(values.term) : Number(initialTerm),
      },
      skip: allTermsLoading,
    });

  const subjectsData = useMemo(() => {
    return subjectsByTermData?.studentSubjectsByTerm || [];
  }, [subjectsByTermData?.studentSubjectsByTerm]);

  return (
    <>
      <StyledStickyBox>
        <StyledTitle variant="h1">Tình hình học tập</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Typography color="text.primary">{id}</Typography>
          <Typography color="text.primary">Tình hình học tập</Typography>
        </StyledBreadCrumbs>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
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
                    <MenuItem key={item} value={item}>
                      {item} - {Number(item) + 1}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
              <StyledFormControl>
                <InputLabel id="term-select-label">Học kỳ</InputLabel>
                <Select
                  labelId="term-select-label"
                  id="term-select"
                  value={values.term || initialTerm}
                  label="Học kỳ"
                  onChange={handleChange('term')}
                >
                  {terms.map((item) => (
                    <MenuItem key={item.maHK} value={item.maHK.toString()}>
                      {item.hocKy}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            </AsyncDataRenderer>
          </Box>
          <StyledStatusBox>
            <Button disabled sx={{ color: '#fff!important' }}>
              ĐRL:{' '}
              {trainingPoint
                ? `${trainingPoint.drl} | ${trainingPoint.xepLoai}`
                : 'Chưa có'}
            </Button>

            <Button disabled sx={{ color: '#fff!important' }}>
              ĐTB:{' '}
              {averagePoint
                ? `${averagePoint?.dtbTong} | ${averagePoint?.xepLoai}`
                : 'Chưa có'}
            </Button>
          </StyledStatusBox>
          <PDFDownloadLink
            document={<ScorePDFTemplate data={MOCK_DATA_EXPORT} />}
            fileName="FORM"
          >
            {({ loading }) =>
              loading ? (
                <Button variant="contained" disabled>
                  Xuất phiếu điểm
                </Button>
              ) : (
                <Button variant="contained">Xuất phiếu điểm</Button>
              )
            }
          </PDFDownloadLink>
        </Box>
      </StyledStickyBox>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <StyledHeader>Các môn đã đăng ký</StyledHeader>
        <AsyncDataRenderer loading={subjectsByTermLoading} data={subjectsData}>
          <TableContainer sx={{ maxHeight: 380 }}>
            <Table stickyHeader aria-label="sticky table">
              <AcademicTableHead />
              <TableBody>
                {subjectsData.map((row, index) => (
                  <AcademicTableRow
                    key={row.maMH}
                    data={row}
                    index={index + 1}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AsyncDataRenderer>
      </Paper>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <StyledHeader>Điểm chi tiết</StyledHeader>
        <TableContainer sx={{ maxHeight: 380 }}>
          <Table stickyHeader aria-label="sticky table">
            <PointTableHead />
            <TableBody>
              {STUDENT_DETAIL_RESULT.map((row, index) => (
                <PointTableRow key={row.maMH} data={row} index={index + 1} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default AcademicReport;
