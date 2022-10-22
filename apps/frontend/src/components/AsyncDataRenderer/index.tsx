import { ReactNode } from 'react';
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

function AsyncDataRenderer({
  children,
  error,
  loading,
  data,
}: AsyncDataRendererProps) {
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return <>{children}</>;
}

export default AsyncDataRenderer;
