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
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Backpack } from '@mui/icons-material';

import Header from '../../components/Header';

import {
  AppBar,
  Drawer,
  StyledContent,
  StyledListItemButton,
  StyledContainer,
  StyledToolbar,
  DrawerHeader,
} from './styles';

function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
              { page: 'Danh sách GVCN', url: '/homeroom-teachers' },
              { page: 'Danh sách sinh viên', url: '/students' },
              { page: 'Môn học và chuyên ngành', url: '/major-courses' },
              { page: 'Lớp học phần', url: '/classroom' },
              { page: 'Đăng ký học phần', url: '/course-registration' },
              { page: 'Điểm học phần', url: '/course-result' },
              { page: 'Điểm rèn luyện', url: '/training-result' },
              { page: 'Hoãn/Vắng thi', url: '/exam-status' },
              { page: 'Nhập thông tin', url: '/import-file' },
            ].map(({ page, url }, index) => (
              <ListItem key={url} disablePadding sx={{ display: 'block' }}>
                <StyledListItemButton
                  active={location.pathname.includes(url)}
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

                    navigate(url);
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
                    {index === 3 && <Backpack />}
                    {index === 4 && <CheckBoxIcon />}
                    {index === 5 && <TextIncreaseIcon />}
                    {index === 6 && <EventAvailableIcon />}
                    {index === 7 && <PersonOffIcon />}
                    {index === 8 && <PublishIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={page}
                    sx={{ opacity: openDrawer ? 1 : 0 }}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <StyledContent component="main">
          <Outlet />
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
                navigate('/import-file');
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
