import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledBox } from './styles';
import SearchBar from '../SearchBar';
import ActionsBar from '../ActionsBar';

interface HeaderProps {
  isAuthenticated?: boolean;
}
function Header({ isAuthenticated }: HeaderProps) {
  return (
    <Box sx={{ position: 'fixed', top: 0, zIndex: 9999, width: '100%' }}>
      <StyledBox>
        <Typography component="h6">Homeroom management</Typography>
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
