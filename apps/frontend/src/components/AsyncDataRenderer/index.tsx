import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { GenericObject } from '../../types';

export interface AsyncDataRendererProps {
  children: ReactNode;
  error?: ApolloError;
  loading: boolean;
  data?: GenericObject | GenericObject[];
}

function AsyncDataRenderer({ children, loading }: AsyncDataRendererProps) {
  if (loading) {
    return (
      <Box sx={{ marginTop: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }
  return <>{children}</>;
}

AsyncDataRenderer.defaultProps = {
  error: null,
  data: null,
};

export default AsyncDataRenderer;
