import React, { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Link,
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
  showPassword: boolean;
}

function Login() {
  const [values, setValues] = useState<State>({
    showPassword: false,
  });

  const handleClickShowPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showPassword: !v.showPassword,
    }));
  }, []);

  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const [login, { loading: loginLoading, error: loginError }] =
    useLoginMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const result = await login({
        variables: {
          email: data.get('email')?.toString() || '',
          password: data.get('password')?.toString() || '',
        },
      });

      localStorage.setItem('EMAIL', data.get('email')?.toString() || '');
      localStorage.setItem('ACCESS_TOKEN', result.data?.login?.token || '');
      setError('');
      navigate('/');
    },
    [login, navigate]
  );

  useEffect(() => {
    if (!loginError) {
      setError('');
      return;
    }

    setError('Email hoặc mật khẩu không hợp lệ');
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
              type="email"
              label="Email"
              name="email"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              variant="filled"
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
            <Grid container alignItems="center" justifyContent="flex-end">
              <Grid item>
                <Link
                  sx={{ fontFamily: 'Roboto', fontSize: '0.875rem' }}
                  component={RouterLink}
                  to="/forgot-password"
                >
                  Quên mật khẩu?
                </Link>
              </Grid>
            </Grid>
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
