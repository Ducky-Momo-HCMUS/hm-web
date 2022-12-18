import {
  Box,
  Button,
  Grid,
  Link,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledTitle,
} from '../../components/styles';
import {
  FAILED_SUBJECTS_STATUS,
  NOT_REGISTERED_SUBJECT_LIST,
  POSTPONE_EXAM_LIST,
} from '../../mocks';

import ClassInfo from './ClassInfo';
import ClassTable from './ClassTable';

const failedColumns = [
  { id: 'maSV', label: 'MSSV' },
  { id: 'tenSV', label: 'Họ và tên' },
  { id: 'tenMH', label: 'Môn học' },
  { id: 'maSH', label: 'Lớp HP' },
  { id: 'diem', label: 'Điểm' },
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
  semesterSubjectStatus: string;
  semesterNotRegistered: string;
  semesterPostponeExam: string;
}

interface Page {
  subjectStatus: number;
  notRegistered: number;
  postponeExam: number;
}

const ROWS_PER_PAGE = 5;

function ClassDetail() {
  const { id } = useParams();
  const [page, setPage] = useState<Page>({
    subjectStatus: 0,
    notRegistered: 0,
    postponeExam: 0,
  });
  const [values, setValues] = useState<Selection>({
    semesterSubjectStatus: 'all',
    semesterNotRegistered: 'all',
    semesterPostponeExam: 'all',
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
          data={FAILED_SUBJECTS_STATUS}
          page={page.subjectStatus}
          semester={values.semesterSubjectStatus}
          rowsPerPage={ROWS_PER_PAGE}
          handleChangePage={handleChangeSubjectStatusPage}
          handleChangeSemester={handleChange('semesterSubjectStatus')}
          hasFilter
        />
        <Grid style={{ marginTop: '0.25rem' }} container spacing={3}>
          <Grid item xs={4}>
            <ClassTable
              title="Danh sách không đăng ký học phần"
              columns={notRegisteredSubjectColumns}
              data={NOT_REGISTERED_SUBJECT_LIST}
              page={page.notRegistered}
              semester={values.semesterNotRegistered}
              rowsPerPage={ROWS_PER_PAGE}
              handleChangePage={handleChangeNotRegisteredPage}
              handleChangeSemester={handleChange('semesterNotRegistered')}
              hasFilter
            />
          </Grid>
          <Grid item xs={8}>
            <ClassTable
              title="Danh sách hoãn thi"
              columns={postponeExamColumns}
              data={POSTPONE_EXAM_LIST}
              page={page.postponeExam}
              semester={values.semesterPostponeExam}
              rowsPerPage={ROWS_PER_PAGE}
              handleChangePage={handleChangePostponeExamPage}
              handleChangeSemester={handleChange('semesterPostponeExam')}
              hasFilter
            />
          </Grid>
        </Grid>
      </StyledContentWrapper>
    </>
  );
}

export default ClassDetail;
