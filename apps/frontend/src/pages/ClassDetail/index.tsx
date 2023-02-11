import {
  Box,
  Button,
  Grid,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import _omit from 'lodash/omit';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledScrollableBox,
  StyledTitle,
} from '../../components/styles';
import {
  HomeroomTermListItem,
  StudentTerm,
  useHomeroomDetailQuery,
  useHomeroomFailListByTermQuery,
  useHomeroomNotEnrolledListByTermQuery,
  useHomeroomPostponeExamListByTermQuery,
  useHomeroomTermListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { groupTermsByYear } from '../../utils';

import ClassInfo from './ClassInfo';
import ClassTable from './ClassTable';

const failedColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'tenMH', label: 'Môn học' },
  { id: 'tenLopHP', label: 'Lớp HP' },
  { id: 'dtb', label: 'Điểm tổng kết' },
  { id: 'ghiChu', label: 'Ghi chú' },
];

const notRegisteredSubjectColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ tên' },
];

const postponeExamColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'tenMH', label: 'Môn học' },
  { id: 'maLopHP', label: 'Lớp HP' },
];

interface Selection {
  termFailList: string;
  yearFailList: string;
  termNotRegistered: string;
  yearNotRegistered: string;
  termPostponeExam: string;
  yearPostponeExam: string;
}

interface Page {
  subjectStatus: number;
  notRegistered: number;
  postponeExam: number;
}

const ROWS_PER_PAGE = 5;

function ClassDetail() {
  const { id = '' } = useParams();
  const [page, setPage] = useState<Page>({
    subjectStatus: 0,
    notRegistered: 0,
    postponeExam: 0,
  });
  const [values, setValues] = useState<Selection>({
    termFailList: '',
    yearFailList: '',
    termNotRegistered: '',
    yearNotRegistered: '',
    termPostponeExam: '',
    yearPostponeExam: '',
  });

  const handleChange = useCallback(
    (prop: keyof Selection) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleChangeSubjectStatusPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, subjectStatus: newPage }));
    },
    []
  );

  const handleChangeNotRegisteredPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, notRegistered: newPage }));
    },
    []
  );

  const handleChangePostponeExamPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, postponeExam: newPage }));
    },
    []
  );

  const { loading: homeroomDetailLoading, data: homeroomDetailData } =
    useHomeroomDetailQuery({
      variables: {
        homeroomId: id,
      },
    });

  const homeroomDetail = useMemo(
    () =>
      homeroomDetailData?.homeroomDetail || {
        giaoVien: {
          tenGV: '',
        },
        siSo: '',
      },
    [homeroomDetailData?.homeroomDetail]
  );

  const { loading: homeroomTermListLoading, data: homeroomTermListData } =
    useHomeroomTermListQuery({
      variables: {
        homeroomId: id,
      },
    });

  const termList = useMemo(
    () => homeroomTermListData?.homeroomTermList?.hocKyNamHoc || [],
    [homeroomTermListData?.homeroomTermList]
  );

  const mappedData = useMemo(
    () => groupTermsByYear(termList as StudentTerm[]),
    [termList]
  );

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { termFailList, termNotRegistered, termPostponeExam } = useMemo(() => {
    const termFailListByYear =
      mappedData[values.yearFailList || years[years.length - 1]];

    const termNotRegisterdByYear =
      mappedData[values.yearNotRegistered || years[years.length - 1]];

    const termPostponeExamByYear =
      mappedData[values.yearPostponeExam || years[years.length - 1]];

    return {
      termFailList: termFailListByYear || [],
      termNotRegistered: termNotRegisterdByYear || [],
      termPostponeExam: termPostponeExamByYear || [],
    };
  }, [
    mappedData,
    values.yearFailList,
    values.yearNotRegistered,
    values.yearPostponeExam,
    years,
  ]);

  const { initialYear, initialTerm } = useMemo(() => {
    const termsByYear = mappedData[years[years.length - 1]]?.map((data) =>
      data.maHK.toString()
    );
    return {
      initialYear: years[years.length - 1],
      initialTerm: termsByYear?.[termsByYear.length - 1] || '',
    };
  }, [mappedData, years]);

  const {
    loading: homeroomFailListByTermLoading,
    data: homeroomFailListByTermData,
  } = useHomeroomFailListByTermQuery({
    variables: {
      homeroomId: id,
      term: values.termFailList
        ? Number(values.termFailList)
        : Number(initialTerm),
    },
    skip: homeroomTermListLoading,
  });

  const failList = useMemo(() => {
    const failListData =
      homeroomFailListByTermData?.homeroomFailListByTerm?.data || [];
    return failListData.map((item) => ({
      maSV: item.sinhVien.maSV,
      tenSV: item.sinhVien.tenSV,
      tenMH: item.lopHocPhan.monHoc.tenMH,
      tenLopHP: item.lopHocPhan.tenLopHP,
      dtb: item.dtb,
    }));
  }, [homeroomFailListByTermData?.homeroomFailListByTerm?.data]);

  const {
    loading: homeroomNotEnrolledListByTermLoading,
    data: homeroomNotEnrolledListByTermData,
  } = useHomeroomNotEnrolledListByTermQuery({
    variables: {
      homeroomId: id,
      term: values.termNotRegistered
        ? Number(values.termNotRegistered)
        : Number(initialTerm),
    },
    skip: homeroomTermListLoading,
  });

  const notEnrolledList = useMemo(() => {
    return (
      homeroomNotEnrolledListByTermData?.homeroomNotEnrolledListByTerm
        ?.khongDangKy || []
    );
  }, [
    homeroomNotEnrolledListByTermData?.homeroomNotEnrolledListByTerm
      ?.khongDangKy,
  ]);

  const {
    loading: homeroomPostponeExamListByTermLoading,
    data: homeroomPostponeExamListByTermData,
  } = useHomeroomPostponeExamListByTermQuery({
    variables: {
      homeroomId: id,
      term: values.termPostponeExam
        ? Number(values.termPostponeExam)
        : Number(initialTerm),
    },
    skip: homeroomTermListLoading,
  });

  const postponeExamList = useMemo(() => {
    return (
      homeroomPostponeExamListByTermData?.homeroomPostponeExamListByTerm
        ?.hoanThi || []
    );
  }, [
    homeroomPostponeExamListByTermData?.homeroomPostponeExamListByTerm?.hoanThi,
  ]);

  return (
    <>
      <Header isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle>Tổng quan lớp học</StyledTitle>
        <StyledBreadCrumbs sx={{ marginBottom: 0 }} aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Typography color="text.primary">Tổng quan lớp học</Typography>
        </StyledBreadCrumbs>
        <StyledScrollableBox>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <AsyncDataRenderer
              loading={homeroomDetailLoading}
              data={homeroomDetailData}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <ClassInfo
                  title="Lớp sinh hoạt"
                  description={id.toUpperCase()}
                />
                <ClassInfo
                  title="Giáo viên chủ nhiệm"
                  description={homeroomDetail?.giaoVien.tenGV}
                />
                <ClassInfo
                  title="Số lượng sinh viên"
                  description={homeroomDetail?.siSo.toString()}
                />
              </Box>
            </AsyncDataRenderer>

            <Button
              component={Link}
              to={`/classes/${id}/report`}
              variant="contained"
            >
              Báo cáo lớp học
            </Button>
          </Box>
          <ClassTable
            title="Tình hình rớt môn"
            columns={failedColumns}
            data={failList}
            loading={homeroomFailListByTermLoading}
            page={page.subjectStatus}
            termList={termFailList as HomeroomTermListItem[]}
            termListLoading={homeroomTermListLoading}
            term={values.termFailList || initialTerm}
            year={values.yearFailList || initialYear}
            yearList={years}
            rowsPerPage={ROWS_PER_PAGE}
            handleChangePage={handleChangeSubjectStatusPage}
            handleChangeTerm={handleChange('termFailList')}
            handleChangeYear={handleChange('yearFailList')}
            hasFilter
          />
          <Grid style={{ marginTop: '0.25rem' }} container spacing={3}>
            <Grid item xs={4}>
              <ClassTable
                title="Danh sách không đăng ký học phần"
                columns={notRegisteredSubjectColumns}
                data={notEnrolledList}
                loading={homeroomNotEnrolledListByTermLoading}
                page={page.notRegistered}
                termList={termNotRegistered as HomeroomTermListItem[]}
                termListLoading={homeroomTermListLoading}
                term={values.termNotRegistered || initialTerm}
                year={values.yearNotRegistered || initialYear}
                yearList={years}
                rowsPerPage={ROWS_PER_PAGE}
                handleChangePage={handleChangeNotRegisteredPage}
                handleChangeTerm={handleChange('termNotRegistered')}
                handleChangeYear={handleChange('yearNotRegistered')}
                hasFilter
              />
            </Grid>
            <Grid item xs={8}>
              <ClassTable
                title="Danh sách hoãn thi"
                columns={postponeExamColumns}
                data={postponeExamList}
                loading={homeroomPostponeExamListByTermLoading}
                page={page.postponeExam}
                termList={termPostponeExam as HomeroomTermListItem[]}
                termListLoading={homeroomTermListLoading}
                term={values.termPostponeExam || initialTerm}
                year={values.yearPostponeExam || initialYear}
                yearList={years}
                rowsPerPage={ROWS_PER_PAGE}
                handleChangePage={handleChangePostponeExamPage}
                handleChangeTerm={handleChange('termPostponeExam')}
                handleChangeYear={handleChange('yearPostponeExam')}
                hasFilter
              />
            </Grid>
          </Grid>
        </StyledScrollableBox>
      </StyledContentWrapper>
    </>
  );
}

export default ClassDetail;
