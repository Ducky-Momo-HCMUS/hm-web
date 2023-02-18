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
              <ListAltIcon color="action" />
              <StyledListItemText primary="Danh sách GVCN" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 1}
              onClick={() => setSelected(1)}
            >
              <ListAltIcon color="action" />
              <StyledListItemText primary="Danh sách sinh viên" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 2}
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
