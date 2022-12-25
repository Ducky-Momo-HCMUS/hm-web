import React, { useCallback, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';

import Header from '../../components/Header';
import {
  StyledCard,
  StyledContainer,
  StyledLogo,
  StyledTextField,
} from '../../components/styles';
import ErrorMessage from '../../components/ErrorMessage';

interface State {
  username: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

function Register() {
  const [values, setValues] = useState<State>({
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
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

  const handleClickShowConfirmPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showConfirmPassword: !v.showConfirmPassword,
    }));
  }, []);

  const [error, setError] = useState<string>('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (
        !values.username.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        setError('Email không hợp lệ');
        return;
      }

      if (values.password !== values.confirmPassword) {
        setError('Mật khẩu xác nhận không khớp');
        return;
      }

      setError('');
    },
    [values.username, values.password, values.confirmPassword]
  );

  return (
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
            label="Tên đăng nhập"
            name="username"
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('username')}
            placeholder="Nhập email..."
            InputLabelProps={{
              shrink: true,
            }}
          />
          <StyledTextField
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
                      <VisibilityOff sx={{ fontSize: '1.25rem' }} />
                    ) : (
                      <Visibility sx={{ fontSize: '1.25rem' }} />
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
          <StyledTextField
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            sx={{ margin: '0.5rem 0', width: '100%' }}
            type={values.showConfirmPassword ? 'text' : 'password'}
            placeholder="Nhập lại mật khẩu..."
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? (
                      <VisibilityOff sx={{ fontSize: '1.25rem' }} />
                    ) : (
                      <Visibility sx={{ fontSize: '1.25rem' }} />
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
            <Button href="/login" variant="text" sx={{ mt: 1, mr: 2 }}>
              Đăng nhập
            </Button>
            <Button type="submit" variant="contained" sx={{ mt: 1 }}>
              Tạo tài khoản
            </Button>
          </Box>
        </Box>
      </StyledCard>
    </StyledContainer>
  );
}

export default Register;
