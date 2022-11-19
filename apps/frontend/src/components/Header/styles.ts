import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: blue[900],
  padding: '0 1.25rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
