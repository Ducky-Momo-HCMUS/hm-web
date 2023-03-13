import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

import { GenericObject } from '../../types';

import { StyledInfoAlert } from './styles';

export interface AsyncDataRendererProps {
  children: ReactNode;
  error?: ApolloError;
  loading: boolean;
  data?: GenericObject | GenericObject[] | null;
  hasFullWidth?: boolean;
}

function AsyncDataRenderer({
  children,
  loading,
  data,
  hasFullWidth = false,
}: AsyncDataRendererProps) {
  if (loading) {
    return (
      <Box sx={{ marginTop: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return hasFullWidth ? (
      <StyledInfoAlert sx={{ width: '100%' }} severity="info">
        Không có dữ liệu
      </StyledInfoAlert>
    ) : (
      <StyledInfoAlert severity="info">Không có dữ liệu</StyledInfoAlert>
    );
  }

  return <>{children}</>;
}

AsyncDataRenderer.defaultProps = {
  error: null,
  data: null,
};

export default AsyncDataRenderer;
