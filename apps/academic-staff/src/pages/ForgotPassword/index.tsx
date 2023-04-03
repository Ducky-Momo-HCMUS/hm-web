import React, { useCallback, useState } from 'react';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

import ErrorMessage from '../../components/ErrorMessage';
import Header from '../../components/Header';
import {
  StyledCard,
  StyledContainer,
  StyledLogo,
  StyledTextField,
} from '../../components/styles';
import { useForgotPasswordMutation } from '../../generated-types';

interface State {
  email: string;
}

function ResetPassword() {
  const [error, setError] = useState('');
  const [values, setValues] = useState<State>({
    email: '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const [forgotPassword, { loading: forgotPasswordLoading }] =
    useForgotPasswordMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        setError('Email không hợp lệ');
        return;
      }

      await forgotPassword({
        variables: {
          email: values.email,
        },
      });

      setError('');
    },
    [forgotPassword, values.email]
  );

  return (
    <>
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
            vào ô bên dưới để nhận email thay đổi mật khẩu.
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              admin@fit.hcmus.edu.vn
            </Typography>
          </Typography>
          {error && <ErrorMessage content={error} />}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <StyledTextField
              type="email"
              required
              label="Email"
              placeholder="Nhập email..."
              name="email"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              variant="filled"
              onChange={handleChange('email')}
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={forgotPasswordLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ResetPassword;
