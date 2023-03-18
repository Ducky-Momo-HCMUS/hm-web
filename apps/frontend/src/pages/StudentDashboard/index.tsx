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
import NoteInfo from './NoteInfo';
import AcademicReport from './AcademicReport';
import StudentProfile from './StudentProfile';
import AcademicOverview from './AcademicOverview';

function StudentDashboard() {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = useState(true);

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
              'Thông tin sinh viên',
              'Ghi chú sinh viên',
              'Tình hình học tập',
              'Kết quả học tập',
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <StyledListItemButton
                  active={selected === index}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => setSelected(index)}
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
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <StyledContent component="main">
          {selected === 0 && <StudentProfile />}
          {selected === 1 && <NoteInfo />}
          {selected === 2 && <AcademicReport />}
          {selected === 3 && <AcademicOverview />}
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default StudentDashboard;
