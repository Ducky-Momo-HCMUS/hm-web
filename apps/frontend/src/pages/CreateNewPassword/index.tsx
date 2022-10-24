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
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

function CreateNewPassword() {
  const [values, setValues] = useState<State>({
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
      if (values.password !== values.confirmPassword) {
        setError('Mật khẩu không khớp');
        return;
      }

      setError('');
    },
    [values.confirmPassword, values.password]
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
                      <VisibilityOff sx={{ fontSize: '1.25rem' }} />
                    ) : (
                      <Visibility sx={{ fontSize: '1.25rem' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
          <StyledTextField
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
                    {values.showPassword ? (
                      <VisibilityOff sx={{ fontSize: '1.25rem' }} />
                    ) : (
                      <Visibility sx={{ fontSize: '1.25rem' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
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

export default CreateNewPassword;
