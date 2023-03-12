import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar';
import ActionsBar from '../ActionsBar';

import { StyledBox } from './styles';

interface HeaderProps {
  isAuthenticated?: boolean;
  isDashboard?: boolean;
}
function Header({ isAuthenticated, isDashboard }: HeaderProps) {
  return isDashboard ? (
    <>
      <Typography
        sx={{
          textDecoration: 'none',
          fontSize: '1.1rem',
          color: 'inherit',
        }}
        component={Link}
        to="/"
      >
        <Avatar sx={{ marginRight: '1rem' }} src="/img/fit-logo.png" />{' '}
      </Typography>
      {isAuthenticated && (
        <>
          <SearchBar />
          <ActionsBar />
        </>
      )}
    </>
  ) : (
    <Box sx={{ position: 'fixed', top: 0, zIndex: 9999, width: '100%' }}>
      <StyledBox>
        <Typography
          sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'inherit' }}
          component={Link}
          to="/"
        >
          <Avatar sx={{ marginRight: '1rem' }} src="/img/fit-logo.png" />{' '}
        </Typography>
        {isAuthenticated && (
          <>
            <SearchBar />
            <ActionsBar />
          </>
        )}
      </StyledBox>
    </Box>
  );
}

Header.defaultProps = {
  isAuthenticated: false,
};

export default Header;
