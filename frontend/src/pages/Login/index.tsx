import React, { useCallback, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
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
import { StyledFormControlLabel } from './styles';
import ErrorMessage from '../../components/ErrorMessage';

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

function Login() {
  const [values, setValues] = useState<State>({
    username: '',
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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!values.username) {
        setError('Tài khoản không hợp lệ');
        return;
      }

      setError('');
    },
    [values.username]
  );

  return (
    <StyledContainer>
      <Header />
      <StyledCard>
        <StyledLogo
          variant='square'
          alt='HCMUS Logo'
          src='/img/hcmus-logo.png'
        />
        {error && <ErrorMessage content={error} />}
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <StyledTextField
            label='Tên đăng nhập'
            name='username'
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant='filled'
            onChange={handleChange('username')}
          />
          <StyledTextField
            label='Mật khẩu'
            name='password'
            sx={{ margin: '0.5rem 0', width: '100%' }}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
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
            variant='filled'
          />
          <Grid container alignItems='center'>
            <Grid item xs>
              <StyledFormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Ghi nhớ đăng nhập'
              />
            </Grid>
            <Grid item>
              <Link href='/forgot-password' variant='body2'>
                {'Quên mật khẩu?'}
              </Link>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'right' }}>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </StyledCard>
    </StyledContainer>
  );
}

export default Login;
