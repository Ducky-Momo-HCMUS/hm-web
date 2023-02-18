import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              Trang bạn đang tìm kiếm không tồn tại
            </Typography>
            <Button onClick={() => navigate('/')} variant="contained">
              Trở về trang chủ
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFound;
