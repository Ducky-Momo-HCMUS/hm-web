import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { StyledBox, StyledMessage } from './styles';

interface ErrorMessageProps {
  content: string;
}

function ErrorMessage({ content }: ErrorMessageProps) {
  return (
    <StyledBox>
      <InfoOutlinedIcon /> <StyledMessage>{content}</StyledMessage>
    </StyledBox>
  );
}

export default ErrorMessage;
