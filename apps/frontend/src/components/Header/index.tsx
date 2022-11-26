import React from 'react';
import { Box, Typography } from '@mui/material';

import SearchBar from '../SearchBar';
import ActionsBar from '../ActionsBar';
import { Link } from 'react-router-dom';

import { StyledBox } from './styles';

interface HeaderProps {
  isAuthenticated?: boolean;
}
function Header({ isAuthenticated }: HeaderProps) {
  return (
    <Box sx={{ position: 'fixed', top: 0, zIndex: 9999, width: '100%' }}>
      <StyledBox>
        <Typography
          sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'inherit' }}
          variant="h6"
          component={Link}
          to="/"
        >
          Homeroom management
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
