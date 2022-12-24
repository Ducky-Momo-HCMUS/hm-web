import { Card, Typography } from '@mui/material';
import React from 'react';

import { StyledHeader } from '../../../components/styles';

import { StyledInfoBox } from './styles';

interface Info {
  title: string;
  value: number;
}

interface ReportInfoProps {
  header: string;
  infos: Info[];
}

function ReportInfo({ header, infos }: ReportInfoProps) {
  return (
    <Card>
      <StyledHeader>
        {header}{' '}
        <Typography component="span" sx={{ fontWeight: 'normal' }}>
          (sinh viên)
        </Typography>
      </StyledHeader>
      {infos.map((info) => (
        <StyledInfoBox>
          <Typography>{info.title}</Typography>
          <Typography>{info.value}</Typography>
        </StyledInfoBox>
      ))}
    </Card>
  );
}

export default ReportInfo;
