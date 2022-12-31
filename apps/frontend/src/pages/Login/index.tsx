import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';

import Header from '../../components/Header';
import {
  StyledCard,
  StyledContainer,
  StyledLogo,
  StyledTextField,
} from '../../components/styles';
import ErrorMessage from '../../components/ErrorMessage';
import { useLoginMutation } from '../../generated-types';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const errorMessages = [
  {
    id: 'account_not_found',
    message: 'Tài khoản không tồn tại',
  },
  { id: 'invalid_password', message: 'Mật khẩu không hợp lệ' },
];

function Login() {
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleClickShowPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showPassword: !v.showPassword,
    }));
  }, []);

  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const [login, { loading: loginLoading, error: loginError }] =
    useLoginMutation({
      onCompleted: () => {
        navigate('/');
      },
    });

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        setError('Email không hợp lệ');
        return;
      }

      await login({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
    },
    [values.email, values.password]
  );

  useEffect(() => {
    if (!loginError) {
      setError('');
      return;
    }

    const errorId =
      loginError?.graphQLErrors[0].extensions.response.body.errorId;
    setError(errorMessages.find((err) => err.id === errorId)?.message || '');
  }, [loginError]);

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
          {error && <ErrorMessage content={error} />}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <StyledTextField
              required
              label="Email"
              name="email"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              variant="filled"
              onChange={handleChange('email')}
              placeholder="Nhập email..."
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              required
              label="Mật khẩu"
              name="password"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              type={values.showPassword ? 'text' : 'password'}
              placeholder="Nhập mật khẩu..."
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <Visibility sx={{ fontSize: '1.25rem' }} />
                      ) : (
                        <VisibilityOff sx={{ fontSize: '1.25rem' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <Box sx={{ textAlign: 'right' }}>
              <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                Đăng nhập
              </Button>
            </Box>
          </Box>
        </StyledCard>
      </StyledContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loginLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Login;
