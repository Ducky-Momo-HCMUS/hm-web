import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Stack } from '@mui/material';

import { GenericObject } from '../../types';

import { StyledInfoAlert } from './styles';

export interface AsyncDataRendererProps {
  children: ReactNode;
  error?: ApolloError;
  loading: boolean;
  data?: GenericObject | GenericObject[] | null;
}

function AsyncDataRenderer({
  children,
  loading,
  data,
}: AsyncDataRendererProps) {
  if (loading) {
    return (
      <Box sx={{ marginTop: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return <StyledInfoAlert severity="info">Không có dữ liệu</StyledInfoAlert>;
  }

  return (
    <Stack direction="row" spacing={3}>
      {children}
    </Stack>
  );
}

AsyncDataRenderer.defaultProps = {
  error: null,
  data: null,
};

export default AsyncDataRenderer;
