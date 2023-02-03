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
  useStudentAddContactMutation,
  useStudentAddParentInfoMutation,
  useStudentDetailQuery,
  useStudentParentInfoListLazyQuery,
} from '../../../generated-types';
import { GET_STUDENT_DETAIL } from '../../../data/queries/student/get-student-detail';
import { GET_STUDENT_PARENT_INFO_LIST } from '../../../data/queries/student/get-student-parent-info';
import { PARENT_PAGE_SIZE } from '../../../constants';

import { StyledGridContainer } from './styles';
import ParentInfoTable from './ParentInfoTable';
import StudentContactTable from './StudentContactTable';
import AddParentInfoDialog from './AddOrEditParentInfoDialog';
import AddStudentContactDialog from './AddOrEditStudentContactDialog';

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
        refetchQueries: [
          { query: GET_STUDENT_PARENT_INFO_LIST, variables: { studentId: id } },
          'StudentParentInfoList',
        ],
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

  return (
    <>
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
          <Button sx={{ textTransform: 'uppercase' }} variant="contained">
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
            spacing={2}
            container
            width="28vw"
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
              <ClassInfo
                title="Họ và tên"
                description={studentDetails?.tenSV}
              />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo
                title="Lớp sinh hoạt"
                description={studentDetails?.maSH?.toUpperCase()}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo title="MSSV" description={id} />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo
                title="Ngày sinh"
                description={
                  studentDetails?.dob && studentDetails?.dob.length > 0
                    ? format(new Date(studentDetails?.dob || ''), 'dd/MM/yyyy')
                    : ''
                }
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="Giới tính"
                description={studentDetails?.gioiTinh === 1 ? 'Nam' : 'Nữ'}
              />
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>
        <AsyncDataRenderer
          loading={studentDetailsLoading}
          data={studentDetailsData}
        >
          <StyledGridContainer spacing={2} container width="50vw">
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
                  description={studentDetails?.sdt}
                />
              </Grid>
              <Grid item xs={12}>
                <ClassInfo
                  title="Email cá nhân"
                  description={studentDetails?.emailCaNhan}
                />
              </Grid>
              <Grid item xs={12}>
                <ClassInfo
                  title="Email sinh viên"
                  description={studentDetails?.emailSV}
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
                data={studentDetails?.lienHeSV}
              >
                <StudentContactTable data={studentDetails?.lienHeSV || []} />
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
            width="28vw"
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
                description={studentDetails?.tenCN || 'Chưa có'}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="GPA"
                description={studentDetails?.gpa_10?.toString() || 'Chưa có'}
              />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo
                title="Xếp loại học lực"
                description={studentDetails?.xepLoai || 'Chưa có'}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="Tình trạng"
                description={studentDetails?.tinhTrang}
              />
            </Grid>
            <Grid item xs={12}>
              <ClassInfo
                title="Chứng chỉ ngoại ngữ"
                description={studentDetails?.ngoaiNgu ? 'Đã nộp' : 'Chưa nộp'}
              />
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>

        <StyledGridContainer spacing={2} container width="50vw">
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
