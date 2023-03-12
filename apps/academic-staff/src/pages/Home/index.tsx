import React, { useCallback, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
} from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WarningIcon from '@mui/icons-material/Warning';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import Header from '../../components/Header';

import ImportFile from './ImportFile';
import {
  Drawer,
  StyledContent,
  StyledListItemButton,
  StyledListItemText,
  StyledContainer,
} from './styles';
import HomeroomTeacherList from './HomeroomTeacherList';
import StudentList from './StudentList';
import MajorCourseList from './MajorCourseList';
import CourseRegisterList from './CourseRegisterList';
import CourseScoreList from './CourseScoreList';
import TrainingPointList from './TrainingPointList';
import PostponeAbsentList from './PostponeAbsentList';

function Home() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Header isAuthenticated />
      <StyledContainer>
        <Drawer variant="permanent" open PaperProps={{ elevation: 8 }}>
          <List component="nav">
            <StyledListItemButton
              active={selected === 0}
              onClick={() => setSelected(0)}
            >
              <CoPresentIcon color="action" />
              <StyledListItemText primary="Danh sách GVCN" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 1}
              onClick={() => setSelected(1)}
            >
              <GroupsIcon color="action" />
              <StyledListItemText primary="Danh sách sinh viên" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 2}
              onClick={() => setSelected(2)}
            >
              <ListAltIcon color="action" />
              <StyledListItemText primary="Môn học và chuyên ngành" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 3}
              onClick={() => setSelected(3)}
            >
              <CheckBoxIcon color="action" />
              <StyledListItemText primary="Đăng ký học phần" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 4}
              onClick={() => setSelected(4)}
            >
              <TextIncreaseIcon color="action" />
              <StyledListItemText primary="Điểm học phần" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 5}
              onClick={() => setSelected(5)}
            >
              <EventAvailableIcon color="action" />
              <StyledListItemText primary="Điểm rèn luyện" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 6}
              onClick={() => setSelected(6)}
            >
              <PersonOffIcon color="action" />
              <StyledListItemText primary="Hoãn/Vắng thi" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 7}
              onClick={handleClickOpen}
            >
              <PublishIcon color="action" />
              <StyledListItemText primary="Nhập thông tin" />
            </StyledListItemButton>
          </List>
        </Drawer>
        <StyledContent component="main">
          {selected === 0 && <HomeroomTeacherList />}
          {selected === 1 && <StudentList />}
          {selected === 2 && <MajorCourseList />}
          {selected === 3 && <CourseRegisterList />}
          {selected === 4 && <CourseScoreList />}
          {selected === 5 && <TrainingPointList />}
          {selected === 6 && <PostponeAbsentList />}
          {selected === 7 && <ImportFile />}
        </StyledContent>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            sx={{ display: 'flex', alignItems: 'center' }}
            id="alert-dialog-title"
          >
            <WarningIcon sx={{ color: 'darkorange', marginRight: '0.5rem' }} />{' '}
            Bạn có chắc muốn đến trang nhập thông tin?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <b>Lưu ý</b>: Khi bạn sử dụng chức năng này, các người dùng khác
              sẽ không thể thao tác với chức năng này.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose}>
              Hủy
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(false);
                setSelected(7);
              }}
              autoFocus
            >
              Tiếp tục
            </Button>
          </DialogActions>
        </Dialog>
      </StyledContainer>
    </>
  );
}

export default Home;
