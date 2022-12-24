import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInfoBox = styled(Box)`
  display: flex;
  padding: 0.75rem;
  & p:first-child {
    width: 50%;
    font-weight: bold;
  }
  border-bottom: 1px solid #eee;
`;
