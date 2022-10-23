import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: blue[900],
  padding: '1.25rem 0 1.25rem 0.75rem',
}));
