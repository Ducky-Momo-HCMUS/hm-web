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
import PublishIcon from '@mui/icons-material/Publish';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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

function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
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
              { page: 'Quản lý tài khoản', url: 'account-management' },
              { page: 'Import tài khoản', url: 'import-account' },
              { page: 'Quản lý GVCN', url: 'teacher-management' },
              { page: 'Quản lý tag', url: 'tag-management' },
            ].map(({ page, url }, index) => (
              <ListItem key={url} disablePadding sx={{ display: 'block' }}>
                <StyledListItemButton
                  active={location.pathname.includes(url)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => navigate(url)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 && <ManageAccountsIcon />}
                    {index === 1 && <PublishIcon />}
                    {index === 2 && <AssignmentIndIcon />}
                    {index === 3 && <TagIcon />}
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

export default Home;
