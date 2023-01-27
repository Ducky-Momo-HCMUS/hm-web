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
  StyledTitle,
} from '../../components/styles';
import {
  useHomeroomDetailQuery,
  useHomeroomFailListByTermQuery,
  useHomeroomFailListQuery,
  useHomeroomNotEnrolledListByTermQuery,
  useHomeroomNotEnrolledListQuery,
  useHomeroomPostponeExamListByTermQuery,
  useHomeroomPostponeExamListQuery,
  useHomeroomTermListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';

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

  const { loading: homeroomDetailLoading, data: homeroomDetailData } =
    useHomeroomDetailQuery({
      variables: {
        homeroomId: id,
      },
    });

  const homeroomDetail = useMemo(
    () =>
      homeroomDetailData?.homeroomDetail || {
        tenGV: '',
        soLuongSV: '',
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

  const {
    loading: homeroomFailListByTermLoading,
    data: homeroomFailListByTermData,
  } = useHomeroomFailListByTermQuery({
    variables: {
      homeroomId: id,
      term: Number(values.termFailList),
    },
    skip: values.termFailList === 'all',
  });

  const {
    loading: homeroomFailListOverallLoading,
    data: homeroomFailListOverallData,
  } = useHomeroomFailListQuery({
    variables: {
      homeroomId: id,
    },
  });

  const failList = useMemo(() => {
    const failListData =
      values.termFailList === 'all'
        ? homeroomFailListOverallData?.homeroomFailList?.dsRotMon || []
        : homeroomFailListByTermData?.homeroomFailListByTerm?.dsRotMon || [];
    return failListData.map((item) => ({
      ..._omit(item, 'vang'),
      tenLopHP: item.tenLopHP.toUpperCase(),
      ghiChu: item.vang ? 'Vắng' : '',
    }));
  }, [
    homeroomFailListByTermData?.homeroomFailListByTerm?.dsRotMon,
    homeroomFailListOverallData?.homeroomFailList?.dsRotMon,
    values.termFailList,
  ]);

  const failListLoading = useMemo(
    () =>
      values.termFailList === 'all'
        ? homeroomFailListOverallLoading
        : homeroomFailListByTermLoading,
    [
      values.termFailList,
      homeroomFailListOverallLoading,
      homeroomFailListByTermLoading,
    ]
  );

  const {
    loading: homeroomNotEnrolledListByTermLoading,
    data: homeroomNotEnrolledListByTermData,
  } = useHomeroomNotEnrolledListByTermQuery({
    variables: {
      homeroomId: id,
      term: Number(values.termNotRegistered),
    },
    skip: values.termNotRegistered === 'all',
  });

  const {
    loading: homeroomNotEnrolledListOverallLoading,
    data: homeroomNotEnrolledListOverallData,
  } = useHomeroomNotEnrolledListQuery({
    variables: {
      homeroomId: id,
    },
  });

  const notEnrolledList = useMemo(() => {
    if (values.termNotRegistered === 'all') {
      return (
        homeroomNotEnrolledListOverallData?.homeroomNotEnrolledList
          ?.khongDangKy || []
      );
    }

    return (
      homeroomNotEnrolledListByTermData?.homeroomNotEnrolledListByTerm
        ?.khongDangKy || []
    );
  }, [
    values.termNotRegistered,
    homeroomNotEnrolledListByTermData?.homeroomNotEnrolledListByTerm
      ?.khongDangKy,
    homeroomNotEnrolledListOverallData?.homeroomNotEnrolledList?.khongDangKy,
  ]);

  const notEnrolledListLoading = useMemo(
    () =>
      values.termNotRegistered === 'all'
        ? homeroomNotEnrolledListOverallLoading
        : homeroomNotEnrolledListByTermLoading,
    [
      values.termNotRegistered,
      homeroomNotEnrolledListOverallLoading,
      homeroomNotEnrolledListByTermLoading,
    ]
  );

  const {
    loading: homeroomPostponeExamListByTermLoading,
    data: homeroomPostponeExamListByTermData,
  } = useHomeroomPostponeExamListByTermQuery({
    variables: {
      homeroomId: id,
      term: Number(values.termPostponeExam),
    },
    skip: values.termPostponeExam === 'all',
  });

  const {
    loading: homeroomPostponeExamListOverallLoading,
    data: homeroomPostponeExamListOverallData,
  } = useHomeroomPostponeExamListQuery({
    variables: {
      homeroomId: id,
    },
  });

  const postponeExamList = useMemo(() => {
    if (values.termPostponeExam === 'all') {
      return (
        homeroomPostponeExamListOverallData?.homeroomPostponeExamList
          ?.hoanThi || []
      );
    }
    return (
      homeroomPostponeExamListByTermData?.homeroomPostponeExamListByTerm
        ?.hoanThi || []
    );
  }, [
    homeroomPostponeExamListByTermData?.homeroomPostponeExamListByTerm?.hoanThi,
    homeroomPostponeExamListOverallData?.homeroomPostponeExamList?.hoanThi,
    values.termPostponeExam,
  ]);

  const postponeExamListLoading = useMemo(
    () =>
      values.termPostponeExam === 'all'
        ? homeroomPostponeExamListOverallLoading
        : homeroomPostponeExamListByTermLoading,
    [
      values.termPostponeExam,
      homeroomPostponeExamListOverallLoading,
      homeroomPostponeExamListByTermLoading,
    ]
  );

  return (
    <>
      <Header isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle>Tổng quan lớp học</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
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
              <ClassInfo title="Lớp sinh hoạt" description={id.toUpperCase()} />
              <ClassInfo
                title="Giáo viên chủ nhiệm"
                description={homeroomDetail?.tenGV}
              />
              <ClassInfo
                title="Số lượng sinh viên"
                description={homeroomDetail?.soLuongSV.toString()}
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
          loading={failListLoading}
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
              loading={notEnrolledListLoading}
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
              loading={postponeExamListLoading}
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
