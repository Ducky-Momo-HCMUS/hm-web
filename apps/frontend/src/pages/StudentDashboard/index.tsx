import React, { useState } from 'react';
import List from '@mui/material/List';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import StarIcon from '@mui/icons-material/Star';
import {
  Drawer,
  StyledContainer,
  StyledContent,
  StyledListItemButton,
  StyledListItemText,
} from './styles';
import NoteInfo from './NoteInfo';
import Header from '../../components/Header';

function StudentDashboard() {
  const [selected, setSelected] = useState(1);

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
              <ContactPageIcon color="action" />
              <StyledListItemText primary="Thông tin sinh viên" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 1}
              onClick={() => setSelected(1)}
            >
              <StickyNote2Icon color="action" />
              <StyledListItemText primary="Ghi chú sinh viên" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 2}
              onClick={() => setSelected(2)}
            >
              <StackedBarChartIcon color="action" />
              <StyledListItemText primary="Tình hình học tập" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 3}
              onClick={() => setSelected(3)}
            >
              <StarIcon color="action" />
              <StyledListItemText primary="Tiến độ học tập" />
            </StyledListItemButton>
          </List>
        </Drawer>
        <StyledContent component="main">
          <NoteInfo />
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default StudentDashboard;