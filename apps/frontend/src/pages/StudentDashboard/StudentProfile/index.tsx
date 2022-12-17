import React, { useState } from 'react';
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
import { PARENTS_DATA } from '../../../mocks/parent';
import { STUDENT_CONTACTS_DATA } from '../../../mocks/student';

import { StyledGridContainer } from './styles';
import ParentInfoTable from './ParentInfoTable';
import StudentContactTable from './StudentContactTable';
import AddOrEditParentInfoDialog from './AddOrEditParentInfoDialog';
import AddOrEditStudentContactDialog from './AddOrEditStudentContactDialog';

function StudentProfile() {
  const { id } = useParams();

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
            <ClassInfo title="Họ và tên" description="Nguyễn Ngọc Thanh Tâm" />
          </Grid>
          <Grid item xs={7}>
            <ClassInfo title="Lớp sinh hoạt" description="19CLC10" />
          </Grid>
          <Grid item xs={5}>
            <ClassInfo title="MSSV" description="19127569" />
          </Grid>
          <Grid item xs={7}>
            <ClassInfo title="Ngày sinh" description="12/12/2001" />
          </Grid>
          <Grid item xs={5}>
            <ClassInfo title="Giới tính" description="Nữ" />
          </Grid>
        </StyledGridContainer>
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
              <ClassInfo title="Số điện thoại" description="09xxxxxxxx" />
            </Grid>
            <Grid item xs={12}>
              <ClassInfo
                title="Email cá nhân"
                description="nakamurayumi556@gmail.com"
              />
            </Grid>
            <Grid item xs={12}>
              <ClassInfo
                title="Email sinh viên"
                description="19127569@student.hcmus.edu.vn"
              />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" justifyContent="space-between">
              <ClassInfo title="Mạng xã hội" description=""/>
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
            <ClassInfo title="Chuyên ngành" description="Kỹ thuật phần mềm" />
          </Grid>
          <Grid item xs={5}>
            <ClassInfo title="GPA" description="7.48" />
          </Grid>
          <Grid item xs={7}>
            <ClassInfo title="Xếp loại học lực" description="Giỏi" />
          </Grid>
          <Grid item xs={5}>
            <ClassInfo title="Tình trạng" description="Đang học" />
          </Grid>
          <Grid item xs={12}>
            <ClassInfo title="Chứng chỉ ngoại ngữ" description="Đã nộp" />
          </Grid>
        </StyledGridContainer>
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
