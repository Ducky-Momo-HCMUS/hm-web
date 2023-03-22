/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import List from '@mui/material/List';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Box,
} from '@mui/material';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header';

import {
  AppBar,
  Drawer,
  DrawerHeader,
  StyledContainer,
  StyledContent,
  StyledListItemButton,
  StyledToolbar,
} from './styles';

function StudentDashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
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
        <Drawer variant="permanent" open={open}>
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
              { page: 'Thông tin sinh viên', url: 'info' },
              { page: 'Ghi chú sinh viên', url: 'notes' },
              { page: 'Tình hình học tập', url: 'academic-report' },
              { page: 'Kết quả học tập', url: 'academic-overview' },
            ].map(({ page, url }, index) => (
              <ListItem key={url} disablePadding sx={{ display: 'block' }}>
                <StyledListItemButton
                  active={location.pathname.includes(url)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => navigate(`/students/${id}/${url}`)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 && <ContactPageIcon />}
                    {index === 1 && <StickyNote2Icon />}
                    {index === 2 && <StackedBarChartIcon />}
                    {index === 3 && <StarIcon />}
                  </ListItemIcon>
                  <ListItemText primary={page} sx={{ opacity: open ? 1 : 0 }} />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <StyledContent component="main">
          <Outlet />
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default StudentDashboard;
