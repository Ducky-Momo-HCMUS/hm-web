import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 0.4375rem;
`;

export const StyledDefaultImage = styled('img')`
  display: block;
  margin: 0 auto;
  max-height: 20rem;
`;
