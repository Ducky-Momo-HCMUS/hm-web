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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (values.newPassword !== values.confirmPassword) {
        setError('Mật khẩu không khớp');
        return;
      }

      setError('');
    },
    [values.confirmPassword, values.newPassword]
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
            required
            label="Mật khẩu hiện tại"
            placeholder="Nhập mật khẩu..."
            name="currentPassword"
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
  );
}

export default ChangePassword;
