import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  styled,
} from '@mui/material';
import {
  Home as HomeIcon,
  TrendingUp as TrendingIcon,
  Bookmark as BookmarkIcon,
  LibraryBooks as LibraryIcon,
  LocalOffer as TagIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { gradients } from '../styles/theme';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  borderRight: `1px solid ${theme.palette.divider}`,
  height: '100vh',
  position: 'fixed',
  top: 64,
  left: 0,
  backgroundColor: theme.palette.background.paper,
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: '4px 8px',
  '&:hover': {
    background: gradients.light,
  },
  ...(active && {
    background: gradients.light,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  }),
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 2, 1),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  fontWeight: 500,
}));

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const mainMenuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Trending', icon: <TrendingIcon />, path: '/trending' },
    { text: 'My Posts', icon: <LibraryIcon />, path: '/my-posts' },
    { text: 'Reading List', icon: <BookmarkIcon />, path: '/reading-list' },
  ];

  const categories = [
    'Technology',
    'Leadership',
    'Design',
    'Product',
    'Engineering',
    'Culture',
  ];

  return (
    <SidebarContainer>
      <List component="nav">
        {mainMenuItems.map((item) => (
          <StyledListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            active={location.pathname === item.path ? 1 : 0}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <CategoryTitle>Categories</CategoryTitle>
      <List>
        {categories.map((category) => (
          <StyledListItem
            button
            key={category}
            onClick={() => navigate(`/category/${category.toLowerCase()}`)}
            active={location.pathname === `/category/${category.toLowerCase()}` ? 1 : 0}
          >
            <ListItemIcon>
              <TagIcon />
            </ListItemIcon>
            <ListItemText primary={category} />
          </StyledListItem>
        ))}
      </List>
    </SidebarContainer>
  );
}
