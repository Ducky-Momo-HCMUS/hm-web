import { Avatar, Box, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';

export const StyledContainer = styled(Box)(({ theme }) => ({
  background: grey[100],
  height: '100vh',
}));

export const StyledCard = styled(Box)(({ theme }) => ({
  background: grey[50],
  borderRadius: '0.625rem',
  maxWidth: '24rem',
  height: 'fit-content',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  padding: '3rem 2rem',
  margin: '3rem auto 0 auto',
}));

export const StyledLogo = styled(Avatar)(({ theme }) => ({
  width: '9rem',
  height: '7.5rem',
  margin: '0 auto 2rem auto',
}));

export const StyledTextField = styled(TextField)`
  & > div {
    background-color: ${grey[100]};
    &:hover {
      background-color: initial;
    }
    &.Mui-focused {
      background-color: initial;
    }
  }
`;
