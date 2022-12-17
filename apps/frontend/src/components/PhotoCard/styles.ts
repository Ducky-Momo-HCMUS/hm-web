import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Card)`
  width: 280px;
`;

export const CardImage = styled(CardMedia)`
  height: 180px;
`;

export const Name = styled(Typography)`
  padding: 8px 16px;
`;
