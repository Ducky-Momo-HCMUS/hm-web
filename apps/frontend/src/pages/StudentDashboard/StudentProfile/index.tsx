/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { format } from 'date-fns';
import { ToastContainer } from 'react-toastify';

import { StyledHeader } from '../NoteInfo/styles';
import ClassInfo from '../../ClassDetail/ClassInfo';
import {
  StyledBreadCrumbs,
  StyledDivider,
  StyledStickyBox,
  StyledTitle,
} from '../../../components/styles';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import {
  StudentAddContactInput,
  StudentAddParentInfoInput,
  StudentContact,
  useStudentAddContactMutation,
  useStudentAddParentInfoMutation,
  useStudentDetailQuery,
  useStudentParentInfoListLazyQuery,
} from '../../../generated-types';
import { GET_STUDENT_DETAIL } from '../../../data/queries/student/get-student-detail';
import { GET_STUDENT_PARENT_INFO_LIST } from '../../../data/queries/student/get-student-parent-info';
import { PARENT_PAGE_SIZE } from '../../../constants';
import { saveDocumentToFile } from '../../../utils';

import { StyledGridContainer } from './styles';
import ParentInfoTable from './ParentInfoTable';
import StudentContactTable from './StudentContactTable';
import AddParentInfoDialog from './AddOrEditParentInfoDialog';
import AddStudentContactDialog from './AddOrEditStudentContactDialog';
import DocumentCreator, {
  ContactInfo,
  GeneralInfo,
  LearningInfo,
} from './student-info-document-creator';

function StudentProfile() {
  const { id = '' } = useParams();

  const [openAddStudentContactDialog, setOpenAddStudentContactDialog] =
    useState(false);

  const handleOpenAddStudentContactDialog = () => {
    setOpenAddStudentContactDialog(true);
  };

  const handleCloseAddStudentContactDialog = () => {
    setOpenAddStudentContactDialog(false);
  };

  const [addStudentContact, { loading: addStudentContactLoading }] =
    useStudentAddContactMutation();

  const handleAddStudentContact = useCallback(
    (payload: StudentAddContactInput) => {
      setOpenAddStudentContactDialog(false);
      addStudentContact({
        variables: {
          studentId: id,
          payload,
        },
        refetchQueries: [
          { query: GET_STUDENT_DETAIL, variables: { studentId: id } },
          'StudentDetail',
        ],
      });
    },
    [addStudentContact, id]
  );

  const [openAddParentInfoDialog, setOpenAddParentInfoDialog] = useState(false);

  const handleOpenAddParentInfoDialog = () => {
    setOpenAddParentInfoDialog(true);
  };

  const handleCloseAddParentInfoDialog = () => {
    setOpenAddParentInfoDialog(false);
  };

  const { loading: studentDetailsLoading, data: studentDetailsData } =
    useStudentDetailQuery({
      variables: {
        studentId: id,
      },
    });

  const studentDetails = useMemo(
    () => studentDetailsData?.studentDetail,
    [studentDetailsData?.studentDetail]
  );

  const [
    getStudentParentInfoList,
    { loading: studentParentInfoListLoading, data: studentParentInfoListData },
  ] = useStudentParentInfoListLazyQuery();

  const [parentPage, setParentPage] = useState(0);

  const handleChangeParentPage = useCallback(
    (event: unknown, newPage: number) => {
      getStudentParentInfoList({
        variables: {
          studentId: id,
          page: newPage + 1,
          size: PARENT_PAGE_SIZE,
        },
      });
      setParentPage(newPage);
    },
    [getStudentParentInfoList, id]
  );

  useEffect(() => {
    getStudentParentInfoList({
      variables: {
        studentId: id,
        page: 1,
        size: PARENT_PAGE_SIZE,
      },
    });
  }, [getStudentParentInfoList, id]);

  const { parentListLength, studentParentInfoList } = useMemo(() => {
    return {
      parentListLength:
        studentParentInfoListData?.studentParentInfoList.total || 0,
      studentParentInfoList:
        studentParentInfoListData?.studentParentInfoList.data || [],
    };
  }, [studentParentInfoListData?.studentParentInfoList]);

  const [addStudentParentInfo, { loading: addStudentParentInfoLoading }] =
    useStudentAddParentInfoMutation();

  const handleAddParentInfo = useCallback(
    (studentInfo: StudentAddParentInfoInput) => {
      setOpenAddParentInfoDialog(false);
      addStudentParentInfo({
        variables: {
          studentId: id,
          payload: studentInfo,
        },
        refetchQueries: [
          {
            query: GET_STUDENT_PARENT_INFO_LIST,
            variables: {
              studentId: id,
              page: 1,
              size: PARENT_PAGE_SIZE,
            },
          },
          'StudentParentInfoList',
        ],
      });
    },
    [addStudentParentInfo, id]
  );

  const { generalInfo, learningInfo, contactInfo } = useMemo(
    () => ({
      generalInfo: {
        maSV: id,
        tenSV: String(studentDetails?.tenSV),
        dob: studentDetails?.dob
          ? format(new Date(String(studentDetails?.dob)), 'dd/MM/yyyy')
          : '',
        gioiTinh: studentDetails?.gioiTinh ? 'Nam' : 'Nữ',
        maSH: String(studentDetails?.maSH),
      } as GeneralInfo,
      learningInfo: {
        tenCN: studentDetails?.tenCN || 'Chưa có',
        xepLoai: studentDetails?.xepLoai || 'Chưa có',
        gpa10: studentDetails?.gpa10,
        ngoaiNgu: studentDetails?.ngoaiNgu ? 'Đã nộp' : 'Chưa nộp',
        tinhTrang: studentDetails?.tinhTrang || 'Chưa có',
      } as LearningInfo,
      contactInfo: {
        sdt: studentDetails?.sdt,
        emailCaNhan: studentDetails?.emailCaNhan,
        emailSV: studentDetails?.emailSV,
        lienHeSV: studentDetails?.lienHeSV || [],
      } as ContactInfo,
    }),
    [id, studentDetails]
  );

  const handleExportStudentInfo = useCallback(() => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create({
      generalInfo,
      learningInfo,
      contactInfo,
      parentInfo: studentParentInfoList,
    });
    saveDocumentToFile(doc, `PhieuThongTin_${id}.docx`);
  }, [contactInfo, generalInfo, id, learningInfo, studentParentInfoList]);

  return (
    <>
      <ToastContainer />
      <StyledStickyBox sx={{ top: '63px' }}>
        <StyledTitle variant="h1">Thông tin sinh viên</StyledTitle>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <StyledBreadCrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Typography color="text.primary">{id}</Typography>
            <Typography color="text.primary">Thông tin sinh viên</Typography>
          </StyledBreadCrumbs>
          <Button
            sx={{ textTransform: 'uppercase' }}
            variant="contained"
            onClick={handleExportStudentInfo}
          >
            Xuất thông tin
          </Button>
        </Box>
      </StyledStickyBox>
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        marginLeft="1rem"
      >
        <AsyncDataRenderer
          loading={studentDetailsLoading}
          data={studentDetailsData}
        >
          <StyledGridContainer
            sx={{ width: '65%' }}
            spacing={2}
            container
            marginRight="3rem"
          >
            <Grid item xs={12}>
              <StyledHeader>
                <Typography component="p" variant="h5">
                  Thông tin cá nhân
                </Typography>
              </StyledHeader>
              <StyledDivider />
            </Grid>
            <Grid item xs={12}>
              <ClassInfo title="Họ và tên" description={generalInfo.tenSV} />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo title="Lớp sinh hoạt" description={generalInfo.maSH} />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo title="MSSV" description={generalInfo.maSV} />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo title="Ngày sinh" description={generalInfo.dob} />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo title="Giới tính" description={generalInfo.gioiTinh} />
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>
        <AsyncDataRenderer
          loading={studentDetailsLoading}
          data={studentDetailsData}
        >
          <StyledGridContainer spacing={2} container>
            <Grid item xs={12}>
              <StyledHeader>
                <Typography component="p" variant="h5">
                  Thông tin liên lạc
                </Typography>
              </StyledHeader>
              <StyledDivider />
            </Grid>
            <Grid item xs={5} spacing={2} container>
              <Grid item xs={12}>
                <ClassInfo
                  title="Số điện thoại"
                  description={contactInfo.sdt}
                />
              </Grid>
              <Grid item xs={12}>
                <ClassInfo
                  title="Email cá nhân"
                  description={contactInfo.emailCaNhan}
                />
              </Grid>
              <Grid item xs={12}>
                <ClassInfo
                  title="Email sinh viên"
                  description={contactInfo.emailSV}
                />
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" justifyContent="space-between">
                <ClassInfo title="Mạng xã hội" description="" />
                <Button
                  variant="text"
                  onClick={handleOpenAddStudentContactDialog}
                >
                  <AddIcon />
                  Thêm
                </Button>
              </Box>
              <AsyncDataRenderer
                loading={studentDetailsLoading}
                data={contactInfo.lienHeSV}
              >
                <StudentContactTable
                  data={contactInfo.lienHeSV as StudentContact[]}
                />
              </AsyncDataRenderer>
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>
        {openAddStudentContactDialog && (
          <AddStudentContactDialog
            open={openAddStudentContactDialog}
            onClose={handleCloseAddStudentContactDialog}
            onClickCancel={handleCloseAddStudentContactDialog}
            onClickConfirm={handleAddStudentContact}
          />
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        marginLeft="1rem"
        marginTop="3rem"
      >
        <AsyncDataRenderer
          loading={studentDetailsLoading}
          data={studentDetailsData}
        >
          <StyledGridContainer
            spacing={2}
            container
            sx={{ width: '65%' }}
            marginRight="3rem"
          >
            <Grid item xs={12}>
              <StyledHeader>
                <Typography component="p" variant="h5">
                  Thông tin học tập
                </Typography>
              </StyledHeader>
              <StyledDivider />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo
                title="Chuyên ngành"
                description={learningInfo.tenCN as string}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="GPA"
                description={learningInfo.gpa10?.toString() || 'Chưa có'}
              />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo
                title="Xếp loại học lực"
                description={learningInfo.xepLoai as string}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="Tình trạng"
                description={learningInfo.tinhTrang}
              />
            </Grid>
            <Grid item xs={12}>
              <ClassInfo
                title="Chứng chỉ ngoại ngữ"
                description={learningInfo.ngoaiNgu}
              />
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>
        <StyledGridContainer spacing={2} container>
          <Grid item xs={12}>
            <StyledHeader>
              <Typography component="p" variant="h5">
                Thông tin phụ huynh
              </Typography>
            </StyledHeader>
            <StyledDivider />
            <Box marginTop="0.85rem">
              <Button variant="text" onClick={handleOpenAddParentInfoDialog}>
                <AddIcon />
                Thêm phụ huynh
              </Button>
            </Box>
            <AsyncDataRenderer
              loading={studentParentInfoListLoading}
              data={studentParentInfoList}
            >
              <ParentInfoTable
                count={parentListLength}
                data={studentParentInfoList}
                page={parentPage}
                handleChangePage={handleChangeParentPage}
                setParentPage={setParentPage}
              />
            </AsyncDataRenderer>
          </Grid>
        </StyledGridContainer>
        {openAddParentInfoDialog && (
          <AddParentInfoDialog
            open={openAddParentInfoDialog}
            onClose={handleCloseAddParentInfoDialog}
            onClickCancel={handleCloseAddParentInfoDialog}
            onClickConfirm={handleAddParentInfo}
          />
        )}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addStudentContactLoading || addStudentParentInfoLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default StudentProfile;
