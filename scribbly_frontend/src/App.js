import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/new-post"
            element={
              <MainLayout>
                <BlogEditor />
              </MainLayout>
            }
          />
          <Route
            path="/post/:id"
            element={
              <MainLayout>
                <BlogView />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
