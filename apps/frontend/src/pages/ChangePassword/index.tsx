import React, { useCallback, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContainer,
  StyledContentWrapper,
  StyledTitle,
} from '../../components/styles';
import ErrorMessage from '../../components/ErrorMessage';
import { useEditPasswordMutation } from '../../generated-types';

import { StyledTextField } from './styles';

interface State {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  showCurrentPassword: boolean;
  showNewPassword: boolean;
  showConfirmPassword: boolean;
}

function ChangePassword() {
  const [values, setValues] = useState<State>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleClickShowCurrentPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showCurrentPassword: !v.showCurrentPassword,
    }));
  }, []);

  const handleClickShowNewPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showNewPassword: !v.showNewPassword,
    }));
  }, []);

  const handleClickShowConfirmPassword = useCallback(() => {
    setValues((v) => ({
      ...v,
      showConfirmPassword: !v.showConfirmPassword,
    }));
  }, []);

  const [error, setError] = useState<string>('');

  const [editPassword, { loading: editPasswordLoading }] =
    useEditPasswordMutation();

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (values.newPassword !== values.confirmPassword) {
        setError('Mật khẩu không khớp');
        return;
      }

      const data = new FormData(event.currentTarget);

      await editPassword({
        variables: {
          email: localStorage.getItem('EMAIL')?.toString() || '',
          password: data.get('password')?.toString() || '',
          newPassword: data.get('newPassword')?.toString() || '',
          passwordConfirm: data.get('passwordConfirm')?.toString() || '',
        },
      });

      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('EMAIL');
      navigate('/login');

      setError('');
    },
    [editPassword, navigate, values.confirmPassword, values.newPassword]
  );

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <StyledTitle>Thay đổi mật khẩu</StyledTitle>
          <StyledBreadCrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Typography color="text.primary">Thay đổi mật khẩu</Typography>
          </StyledBreadCrumbs>
          {error && <ErrorMessage content={error} />}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <StyledTextField
              required
              label="Mật khẩu hiện tại"
              placeholder="Nhập mật khẩu..."
              name="password"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              type={values.showCurrentPassword ? 'text' : 'password'}
              value={values.currentPassword}
              onChange={handleChange('currentPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowCurrentPassword}
                      edge="end"
                    >
                      {values.showCurrentPassword ? (
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
              label="Mật khẩu mới"
              placeholder="Nhập mật khẩu..."
              name="newPassword"
              sx={{ margin: '0.5rem 0', width: '100%' }}
              type={values.showNewPassword ? 'text' : 'password'}
              value={values.newPassword}
              onChange={handleChange('newPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      edge="end"
                    >
                      {values.showNewPassword ? (
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
              placeholder="Nhập mật khẩu..."
              name="passwordConfirm"
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
        </StyledContentWrapper>
      </StyledContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editPasswordLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ChangePassword;
