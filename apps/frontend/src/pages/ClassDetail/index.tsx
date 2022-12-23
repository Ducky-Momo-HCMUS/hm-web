import {
  Box,
  Button,
  Grid,
  Link,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import _omit from 'lodash/omit';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledTitle,
} from '../../components/styles';
import {
  useHomeroomFailListQuery,
  useHomeroomNotEnrolledListQuery,
  useHomeroomPostponeExamListQuery,
  useHomeroomTermListQuery,
} from '../../generated-types';

import ClassInfo from './ClassInfo';
import ClassTable from './ClassTable';

const failedColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'tenMH', label: 'Môn học' },
  { id: 'tenLopHP', label: 'Lớp HP' },
  { id: 'dtb', label: 'Điểm' },
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
  termNotRegistered: string;
  termPostponeExam: string;
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
    termFailList: 'all',
    termNotRegistered: 'all',
    termPostponeExam: 'all',
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

  const { loading: homeroomFailListLoading, data: homeroomFailListData } =
    useHomeroomFailListQuery({
      variables: {
        homeroomId: id,
        term: Number(values.termFailList),
      },
      skip: values.termFailList === 'all',
    });

  const failList = useMemo(() => {
    const failListData = homeroomFailListData?.homeroomFailList?.dsRotMon || [];
    return failListData.map((item) => ({
      ..._omit(item, 'vang'),
      tenLopHP: item.tenLopHP.toUpperCase(),
      ghiChu: item.vang ? 'Vắng' : '',
    }));
  }, [homeroomFailListData?.homeroomFailList]);

  const {
    loading: homeroomNotEnrolledListLoading,
    data: homeroomNotEnrolledListData,
  } = useHomeroomNotEnrolledListQuery({
    variables: {
      homeroomId: id,
      term: Number(values.termNotRegistered),
    },
    skip: values.termNotRegistered === 'all',
  });

  const notEnrolledList = useMemo(
    () =>
      homeroomNotEnrolledListData?.homeroomNotEnrolledList?.khongDangKy || [],
    [homeroomNotEnrolledListData?.homeroomNotEnrolledList?.khongDangKy]
  );

  const {
    loading: homeroomPostponeExamListLoading,
    data: homeroomPostponeExamListData,
  } = useHomeroomPostponeExamListQuery({
    variables: {
      homeroomId: id,
      term: Number(values.termPostponeExam),
    },
    skip: values.termPostponeExam === 'all',
  });

  const postponeExamList = useMemo(
    () => homeroomPostponeExamListData?.homeroomPostponeExamList?.hoanThi || [],
    [homeroomPostponeExamListData?.homeroomPostponeExamList?.hoanThi]
  );

  return (
    <>
      <Header isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle>Tổng quan lớp học</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Typography color="text.primary">Tổng quan lớp học</Typography>
        </StyledBreadCrumbs>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <ClassInfo title="Lớp sinh hoạt" description="19CLC10" />
            <ClassInfo
              title="Giáo viên chủ nhiệm"
              description="Hồ Tuấn Thanh"
            />
            <ClassInfo title="Số lượng sinh viên" description="10" />
          </Box>
          <Button
            component={RouterLink}
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
          loading={homeroomFailListLoading}
          page={page.subjectStatus}
          termList={termList}
          termListLoading={homeroomTermListLoading}
          term={values.termFailList}
          rowsPerPage={ROWS_PER_PAGE}
          handleChangePage={handleChangeSubjectStatusPage}
          handleChangeTerm={handleChange('termFailList')}
          hasFilter
        />
        <Grid style={{ marginTop: '0.25rem' }} container spacing={3}>
          <Grid item xs={4}>
            <ClassTable
              title="Danh sách không đăng ký học phần"
              columns={notRegisteredSubjectColumns}
              data={notEnrolledList}
              loading={homeroomNotEnrolledListLoading}
              page={page.notRegistered}
              termList={termList}
              termListLoading={homeroomTermListLoading}
              term={values.termNotRegistered}
              rowsPerPage={ROWS_PER_PAGE}
              handleChangePage={handleChangeNotRegisteredPage}
              handleChangeTerm={handleChange('termNotRegistered')}
              hasFilter
            />
          </Grid>
          <Grid item xs={8}>
            <ClassTable
              title="Danh sách hoãn thi"
              columns={postponeExamColumns}
              data={postponeExamList}
              loading={homeroomPostponeExamListLoading}
              page={page.postponeExam}
              termList={termList}
              termListLoading={homeroomTermListLoading}
              term={values.termPostponeExam}
              rowsPerPage={ROWS_PER_PAGE}
              handleChangePage={handleChangePostponeExamPage}
              handleChangeTerm={handleChange('termPostponeExam')}
              hasFilter
            />
          </Grid>
        </Grid>
      </StyledContentWrapper>
    </>
  );
}

export default ClassDetail;
