import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGridContainer = styled(Grid)(() => ({
  backgroundColor: '#fff',
  borderRadius: '0.625rem',
  padding: '1rem 2rem 1rem 1rem',
  filter: 'drop-shadow(0px 2px 2.5px rgba(0,0,0,0.32))',
}));
