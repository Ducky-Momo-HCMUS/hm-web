import React from 'react';
import { Typography } from '@mui/material';

import { StyledContainer, StyledTitle } from './styles';

interface ClassInfoProps {
  title: string;
  description: string;
}

function ClassInfo({ title, description }: ClassInfoProps) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <Typography variant="body1">{description}</Typography>
    </StyledContainer>
  );
}

export default ClassInfo;
