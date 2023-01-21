import React, { useState } from 'react';
import { List } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TagIcon from '@mui/icons-material/Tag';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import Header from '../../components/Header';
import ManageAccount from '../ManageAccount';
import ManageTag from '../ManageTag';
import ManageHomeroomTeacher from '../ManageHomeroomTeacher';

import {
  Drawer,
  StyledContainer,
  StyledContent,
  StyledListItemButton,
  StyledListItemText,
} from './styles';

function Home() {
  const [selected, setSelected] = useState(0);

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
              <ManageAccountsIcon color="action" />
              <StyledListItemText primary="Quản lý tài khoản" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 1}
              onClick={() => setSelected(1)}
            >
              <AssignmentIndIcon color="action" />
              <StyledListItemText primary="Quản lý GVCN" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 2}
              onClick={() => setSelected(2)}
            >
              <TagIcon color="action" />
              <StyledListItemText primary="Quản lý tag" />
            </StyledListItemButton>
          </List>
        </Drawer>
        <StyledContent component="main">
          {selected === 0 && <ManageAccount />}
          {selected === 1 && <ManageHomeroomTeacher />}
          {selected === 2 && <ManageTag />}
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Home;
