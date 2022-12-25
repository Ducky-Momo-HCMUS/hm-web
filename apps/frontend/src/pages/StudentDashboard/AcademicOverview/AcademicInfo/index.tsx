import React from 'react';
import { Paper, Typography } from '@mui/material';

import { StyledHeader, StyledInfoBox } from '../../../../components/styles';

import { StyledInfoWithColor } from './styles';

interface AcademicDetail {
  title: string;
  content: string | number;
}

interface AcademicInfoProps {
  infoList: AcademicDetail[];
}

function AcademicInfo({ infoList }: AcademicInfoProps) {
  return (
    <Paper>
      <StyledHeader>Thông tin chung</StyledHeader>
      {infoList.map((item, index) => (
        <StyledInfoBox key={index}>
          <Typography>{item.title}</Typography>
          {typeof item.content === 'number' ? (
            <StyledInfoWithColor>{item.content}</StyledInfoWithColor>
          ) : (
            <Typography>{item.content}</Typography>
          )}
        </StyledInfoBox>
      ))}
    </Paper>
  );
}

export default AcademicInfo;
