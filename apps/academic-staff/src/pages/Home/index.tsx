import React, { useState } from 'react';
import { List } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import ListAltIcon from '@mui/icons-material/ListAlt';

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
              <PublishIcon color="action" />
              <StyledListItemText primary="Nhập thông tin" />
            </StyledListItemButton>
            <StyledListItemButton
              active={selected === 1}
              onClick={() => setSelected(1)}
            >
              <ListAltIcon color="action" />
              <StyledListItemText primary="Danh sách GVCN" />
            </StyledListItemButton>
          </List>
        </Drawer>
        <StyledContent component="main">
          {selected === 0 && <ImportFile />}
          {selected === 1 && <HomeroomTeacherList />}
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Home;
