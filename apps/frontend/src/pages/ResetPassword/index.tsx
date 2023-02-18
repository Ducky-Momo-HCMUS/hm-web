import React, { useCallback, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../../components/Header';
import {
  StyledCard,
  StyledContainer,
  StyledLogo,
  StyledTextField,
} from '../../components/styles';
import ErrorMessage from '../../components/ErrorMessage';
import { useResetPasswordMutation } from '../../generated-types';

interface State {
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

function ResetPassword() {
  const [values, setValues] = useState<State>({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const [searchParams] = useSearchParams();

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
  const navigate = useNavigate();

  const [resetPassword, { loading: resetPasswordLoading }] =
    useResetPasswordMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      if (values.password !== values.confirmPassword) {
        setError('Mật khẩu không khớp');
        return;
      }

      const result = await resetPassword({
        variables: {
          password: data.get('password')?.toString() || '',
          passwordConfirm: data.get('confirmPassword')?.toString() || '',
          token: searchParams.get('token') || '',
          id: Number(searchParams.get('id')) || 0,
        },
      });

      if (result.data?.resetPassword?.status === 200) {
        setError('');
        navigate('/login');
      }
    },
    [
      navigate,
      resetPassword,
      searchParams,
      values.confirmPassword,
      values.password,
    ]
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
          {error && <ErrorMessage content={error} />}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <StyledTextField
              required
              label="Mật khẩu mới"
              name="password"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              type={values.showPassword ? 'text' : 'password'}
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
            <StyledTextField
              required
              label="Nhập lại mật khẩu mới"
              name="confirmPassword"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              type={values.showConfirmPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
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
                Lưu thay đổi
              </Button>
            </Box>
          </Box>
        </StyledCard>
      </StyledContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={resetPasswordLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ResetPassword;
