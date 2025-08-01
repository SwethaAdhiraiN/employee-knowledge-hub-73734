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

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Register:', formData);
  };

  return (
    <AuthContainer>
      <AuthPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom className="gradient-text">
          Scribbly
        </Typography>
        <Typography variant="h5" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join our community of writers and readers
        </Typography>

        <Form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <SubmitButton
            fullWidth
            type="submit"
            variant="contained"
            size="large"
          >
            Sign Up
          </SubmitButton>
        </Form>

        <Box sx={{ mt: 3 }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/login')}
          >
            Already have an account? Sign in
          </Link>
        </Box>
      </AuthPaper>
    </AuthContainer>
  );
}
