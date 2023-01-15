import React, { useState } from 'react';
import { List } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TagIcon from '@mui/icons-material/Tag';

import Header from '../../components/Header';
import ManageAccount from '../ManageAccount';
import ManageTag from '../ManageTag';

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
              <TagIcon color="action" />
              <StyledListItemText primary="Quản lý tag" />
            </StyledListItemButton>
          </List>
        </Drawer>
        <StyledContent component="main">
          {selected === 0 && <ManageAccount />}
          {selected === 1 && <ManageTag />}
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Home;
