import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gradients } from '../styles/theme';

const AuthContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  background: gradients.light,
});

const AuthPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: gradients.primary,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5),
  '&:hover': {
    background: gradients.subtle,
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login:', { email, password });
  };

  return (
    <AuthContainer>
      <AuthPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom className="gradient-text">
          Scribbly
        </Typography>
        <Typography variant="h5" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Share your knowledge with the world
        </Typography>

        <Form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton
            fullWidth
            type="submit"
            variant="contained"
            size="large"
          >
            Sign In
          </SubmitButton>
        </Form>

        <Box sx={{ mt: 3 }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/register')}
          >
            Don't have an account? Sign up
          </Link>
        </Box>
      </AuthPaper>
    </AuthContainer>
  );
}
