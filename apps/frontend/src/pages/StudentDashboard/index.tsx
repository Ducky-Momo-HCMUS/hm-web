import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import StarIcon from '@mui/icons-material/Star';
import { Drawer, StyledContent, StyledListItemText } from './styles';

export const mainListItems = (
  <>
    <ListItemButton>
      <ContactPageIcon color="action" />
      <StyledListItemText primary="Thông tin sinh viên" />
    </ListItemButton>
    <ListItemButton>
      <StickyNote2Icon color="action" />
      <StyledListItemText primary="Ghi chú sinh viên" />
    </ListItemButton>
    <ListItemButton>
      <StackedBarChartIcon color="action" />
      <StyledListItemText primary="Tình hình học tập" />
    </ListItemButton>
    <ListItemButton>
      <StarIcon color="action" />
      <StyledListItemText primary="Tiến độ học tập" />
    </ListItemButton>
  </>
);

function StudentDashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open PaperProps={{ elevation: 8 }}>
        <List component="nav">{mainListItems}</List>
      </Drawer>
      <StyledContent component="main">Alo</StyledContent>
    </Box>
  );
}

export default StudentDashboard;
