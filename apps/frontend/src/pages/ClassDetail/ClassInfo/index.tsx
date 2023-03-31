import React, { useCallback } from 'react';
import { Typography } from '@mui/material';

import {
  renderGPA10WithProperColor,
  renderStatusWithProperColor,
} from '../../../utils/student';

import { StyledContainer, StyledTitle } from './styles';

interface ClassInfoProps {
  title: string;
  description: string | undefined;
}

function ClassInfo({ title, description = '' }: ClassInfoProps) {
  const renderDescriptionWithProperColor = useCallback(() => {
    if (title === 'Tình trạng') {
      return renderStatusWithProperColor(description);
    }

    if (title === 'GPA') {
      return renderGPA10WithProperColor(Number(description));
    }

    return <Typography variant="body1">{description}</Typography>;
  }, [description, title]);

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {renderDescriptionWithProperColor()}
    </StyledContainer>
  );
}

export default ClassInfo;
