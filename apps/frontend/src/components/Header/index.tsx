import React from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './styles';
import SearchBar from '../SearchBar';
import ActionsBar from '../ActionsBar';

interface HeaderProps {
  isAuthenticated?: boolean;
}
function Header({ isAuthenticated }: HeaderProps) {
  return (
    <StyledBox>
      <Typography component="h6">Homeroom management</Typography>
      {isAuthenticated && (
        <>
          <SearchBar />
          <ActionsBar />
        </>
      )}
    </StyledBox>
  );
}

Header.defaultProps = {
  isAuthenticated: false,
};

export default Header;
