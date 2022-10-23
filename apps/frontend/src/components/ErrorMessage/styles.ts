import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.error.light,
  borderRadius: '0.25rem',
  padding: '0.75rem 1rem',
}));

export const StyledMessage = styled('span')(({ theme }) => ({
  marginLeft: '0.75rem',
  color: theme.palette.error.dark,
  fontWeight: 500,
}));
