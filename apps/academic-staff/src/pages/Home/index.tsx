import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Header from '../../components/Header';

import ImportFile from './ImportFile';
import {
  AppBar,
  Drawer,
  StyledContent,
  StyledListItemButton,
  StyledContainer,
  StyledToolbar,
  DrawerHeader,
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

  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="fixed" open={openDrawer}>
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(openDrawer && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Header isAuthenticated isDashboard />
          </Box>
        </StyledToolbar>
      </AppBar>
      <StyledContainer>
        <Drawer variant="permanent" open={openDrawer}>
          <DrawerHeader>
            <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              'Danh sách GVCN',
              'Danh sách sinh viên',
              'Môn học và chuyên ngành',
              'Đăng ký học phần',
              'Điểm học phần',
              'Điểm rèn luyện',
              'Hoãn/Vắng thi',
              'Nhập thông tin',
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <StyledListItemButton
                  active={selected === index}
                  sx={{
                    minHeight: 48,
                    justifyContent: openDrawer ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    if (index === 7) {
                      handleClickOpen();
                      return;
                    }

                    setSelected(index);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openDrawer ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 && <CoPresentIcon />}
                    {index === 1 && <GroupsIcon />}
                    {index === 2 && <ListAltIcon />}
                    {index === 3 && <CheckBoxIcon />}
                    {index === 4 && <TextIncreaseIcon />}
                    {index === 5 && <EventAvailableIcon />}
                    {index === 6 && <PersonOffIcon />}
                    {index === 7 && <PublishIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: openDrawer ? 1 : 0 }}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
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
