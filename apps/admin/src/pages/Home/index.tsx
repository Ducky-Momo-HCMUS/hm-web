import React, { useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TagIcon from '@mui/icons-material/Tag';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Header from '../../components/Header';
import ManageAccount from '../ManageAccount';
import ManageTag from '../ManageTag';
import ManageHomeroomTeacher from '../ManageHomeroomTeacher';

import {
  AppBar,
  Drawer,
  DrawerHeader,
  StyledContainer,
  StyledContent,
  StyledListItemButton,
  StyledToolbar,
} from './styles';

function Home() {
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
            {['Quản lý tài khoản', 'Quản lý GVCN', 'Quản lý tag'].map(
              (text, index) => (
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
                      {index === 0 && <ManageAccountsIcon />}
                      {index === 1 && <AssignmentIndIcon />}
                      {index === 2 && <TagIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </StyledListItemButton>
                </ListItem>
              )
            )}
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
