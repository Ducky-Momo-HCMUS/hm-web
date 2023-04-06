import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import { decodeJwt } from 'jose';

import { REACT_APP_NOTIFICATION_APP_ID } from '../../utils/config';

import { StyledBox } from './styles';

function ActionsBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationSubscriberId, setNotificationSubscriberId] =
    React.useState<string | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const email = localStorage.getItem('EMAIL')?.toString();

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EMAIL');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const jwt = localStorage.getItem('ACCESS_TOKEN');
    if (jwt) {
      const jwtPayload = decodeJwt(jwt);
      setNotificationSubscriberId(String(jwtPayload.sub));
    }
  }, []);

  return (
    <>
      <StyledBox>
        {notificationSubscriberId && (
          <NovuProvider
            subscriberId={String(notificationSubscriberId)}
            applicationIdentifier={REACT_APP_NOTIFICATION_APP_ID}
            i18n="vi"
          >
            <PopoverNotificationCenter colorScheme="light">
              {({ unseenCount }) => (
                <NotificationBell unseenCount={unseenCount} />
              )}
            </PopoverNotificationCenter>
          </NovuProvider>
        )}
        <IconButton
          sx={{ paddingRight: 0 }}
          size="large"
          color="inherit"
          aria-label="personal"
          component="label"
          onClick={handleClick}
        >
          <AccountCircleIcon fontSize="inherit" />
        </IconButton>
      </StyledBox>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          {email}
        </MenuItem>
        <MenuItem>
          <ListItemButton
            sx={{ padding: 0 }}
            onClick={() => navigate('/change-password')}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Thay đổi mật khẩu
          </ListItemButton>
        </MenuItem>
        <MenuItem>
          <ListItemButton sx={{ padding: 0 }} onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Đăng xuất
          </ListItemButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default ActionsBar;
