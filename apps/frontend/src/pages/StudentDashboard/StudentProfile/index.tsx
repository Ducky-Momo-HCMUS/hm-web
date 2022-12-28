import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { StyledHeader } from '../NoteInfo/styles';
import ClassInfo from '../../ClassDetail/ClassInfo';
import {
  StyledBreadCrumbs,
  StyledDivider,
  StyledTitle,
} from '../../../components/styles';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { PARENTS_DATA } from '../../../mocks/parent';
import { STUDENT_CONTACTS_DATA } from '../../../mocks/student';
import { useStudentDetailQuery } from '../../../generated-types';

import { StyledGridContainer } from './styles';
import ParentInfoTable from './ParentInfoTable';
import StudentContactTable from './StudentContactTable';
import AddOrEditParentInfoDialog from './AddOrEditParentInfoDialog';
import AddOrEditStudentContactDialog from './AddOrEditStudentContactDialog';

function StudentProfile() {
  const { id = '' } = useParams();

  const [
    openAddOrEditStudentContactDialog,
    setOpenAddOrEditStudentContactDialog,
  ] = useState(false);

  const [openAddOrEditParentInfoDialog, setOpenAddOrEditParentInfoDialog] =
    useState(false);

  const handleOpenAddOrEditStudentContactDialog = () => {
    setOpenAddOrEditStudentContactDialog(true);
  };

  const handleCloseAddOrEditStudentContactDialog = () => {
    setOpenAddOrEditStudentContactDialog(false);
  };

  const handleOpenAddOrEditParentInfoDialog = () => {
    setOpenAddOrEditParentInfoDialog(true);
  };

  const handleCloseAddOrEditParentInfoDialog = () => {
    setOpenAddOrEditParentInfoDialog(false);
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

  return (
    <>
      <StyledTitle variant="h1">Thông tin sinh viên</StyledTitle>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        marginBottom="1.5rem"
      >
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Typography color="text.primary">
            {id} - Nguyễn Ngọc Thanh Tâm
          </Typography>
          <Typography color="text.primary">Thông tin sinh viên</Typography>
        </StyledBreadCrumbs>
        <Button sx={{ textTransform: 'uppercase' }} variant="contained">
          Xuất thông tin
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" marginLeft="1rem">
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
              <ClassInfo title="Ngày sinh" description={studentDetails?.dob} />
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
                  onClick={handleOpenAddOrEditStudentContactDialog}
                >
                  <AddIcon />
                  Thêm
                </Button>
              </Box>
              <StudentContactTable data={STUDENT_CONTACTS_DATA} />
            </Grid>
          </StyledGridContainer>
        </AsyncDataRenderer>
        <AddOrEditStudentContactDialog
          open={openAddOrEditStudentContactDialog}
          onClose={handleCloseAddOrEditStudentContactDialog}
          onClickCancel={handleCloseAddOrEditStudentContactDialog}
          onClickConfirm={handleCloseAddOrEditStudentContactDialog}
        />
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
                description={studentDetails?.maCN}
              />
            </Grid>
            <Grid item xs={5}>
              <ClassInfo
                title="GPA"
                description={studentDetails?.gpa_10.toString()}
              />
            </Grid>
            <Grid item xs={7}>
              <ClassInfo title="Xếp loại học lực" description="Giỏi" />
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
              <Button
                variant="text"
                onClick={handleOpenAddOrEditParentInfoDialog}
              >
                <AddIcon />
                Thêm phụ huynh
              </Button>
            </Box>
            <ParentInfoTable data={PARENTS_DATA} />
          </Grid>
        </StyledGridContainer>
        <AddOrEditParentInfoDialog
          open={openAddOrEditParentInfoDialog}
          onClose={handleCloseAddOrEditParentInfoDialog}
          onClickCancel={handleCloseAddOrEditParentInfoDialog}
          onClickConfirm={handleCloseAddOrEditParentInfoDialog}
        />
      </Box>
    </>
  );
}

export default StudentProfile;
