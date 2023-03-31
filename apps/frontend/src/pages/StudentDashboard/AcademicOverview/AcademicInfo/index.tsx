import React from 'react';
import { Paper, Typography } from '@mui/material';

import { StyledHeader, StyledInfoBox } from '../../../../components/styles';
import { renderGPA10WithProperColor } from '../../../../utils/student';

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
      {infoList.map((item) => (
        <StyledInfoBox key={item.title}>
          <Typography>{item.title}</Typography>
          {typeof item.content === 'number' ? (
            <>{renderGPA10WithProperColor(item.content)}</>
          ) : (
            <Typography>{item.content}</Typography>
          )}
        </StyledInfoBox>
      ))}
    </Paper>
  );
}

export default AcademicInfo;
