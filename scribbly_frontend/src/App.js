import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import './styles/global.css';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Pages
import Home from './pages/Home';
import BlogEditor from './pages/BlogEditor';
import BlogView from './pages/BlogView';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const MainLayout = ({ children }) => (
  <Box sx={{ display: 'flex', minHeight: '100vh' }}>
    <CssBaseline />
    <Navbar />
    <Sidebar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        ml: { xs: 0, md: '240px' },
        width: { xs: '100%', md: `calc(100% - 240px)` },
      }}
    >
      {children}
    </Box>
  </Box>
);

// Protected Route component to handle authentication
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');
    setIsAuthenticated(token !== null);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // Don't render anything while checking auth status
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : <Login />
          } />
          <Route path="/register" element={
            isAuthenticated ? <Navigate to="/" /> : <Register />
          } />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/new-post"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <BlogEditor />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <BlogView />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Profile />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          {/* Catch all route - redirect to login if not authenticated */}
          <Route path="*" element={
            isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
