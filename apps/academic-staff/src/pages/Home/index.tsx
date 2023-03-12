import React, { useCallback, useState } from 'react';
import {
  Avatar,
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
            <Avatar sx={{ marginLeft: '0.5rem' }} src="/img/fit-logo.png" />
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
            {['Danh sách GVCN', 'Danh sách sinh viên', 'Nhập thông tin'].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <StyledListItemButton
                    active={selected === index}
                    sx={{
                      minHeight: 48,
                      justifyContent: openDrawer ? 'initial' : 'center',
                      px: 2.5,
                    }}
                    onClick={() => {
                      if (index === 2) {
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
                      {index === 0 && <ListAltIcon />}
                      {index === 1 && <ListAltIcon />}
                      {index === 2 && <PublishIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: openDrawer ? 1 : 0 }}
                    />
                  </StyledListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <StyledContent component="main">
          {selected === 0 && <HomeroomTeacherList />}
          {selected === 1 && <StudentList />}
          {selected === 2 && <ImportFile />}
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
                setSelected(2);
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
