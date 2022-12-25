import React, { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import Header from '../../components/Header';
import {
  StyledCard,
  StyledContainer,
  StyledLogo,
  StyledTextField,
} from '../../components/styles';
import CreateNewPassword from '../CreateNewPassword';

interface State {
  teacherId: string;
}

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [values, setValues] = useState<State>({
    teacherId: '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (
        !values.teacherId.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        setError('Email không hợp lệ');
        return;
      }

      setError('');
    },
    [values.teacherId]
  );

  if (searchParams.get('token') && searchParams.get('teacherId')) {
    return <CreateNewPassword />;
  }

  return (
    <StyledContainer>
      <Header />
      <StyledCard>
        <StyledLogo
          variant="square"
          alt="HCMUS Logo"
          src="/img/hcmus-logo.png"
        />
        <Typography sx={{ mb: 1 }}>
          Vui lòng nhập{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            email
          </Typography>{' '}
          vào ô bên dưới để nhận email thay đổi mật khẩu. Nếu gặp vấn đề liên
          quan đến đăng nhập vào hệ thống vui lòng liên hệ{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            admin@ctdb.hcmus.edu.vn
          </Typography>
        </Typography>
        {error && <ErrorMessage content={error} />}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <StyledTextField
            label="Email"
            placeholder="Nhập email..."
            name="teacherId"
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('teacherId')}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Box sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained" sx={{ mt: 1 }}>
              Gửi yêu cầu
            </Button>
          </Box>
        </Box>
      </StyledCard>
    </StyledContainer>
  );
}

export default ResetPassword;
