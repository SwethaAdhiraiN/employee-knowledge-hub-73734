import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Tab,
  Tabs,
  Grid,
  Button,
  styled,
} from '@mui/material';
import { gradients } from '../styles/theme';

const ProfileHeader = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  background: gradients.subtle,
  color: theme.palette.common.white,
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

const ContentTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTab-root': {
    textTransform: 'none',
    fontSize: '1rem',
  },
}));

// Mock data - replace with API call
const mockProfile = {
  name: 'John Doe',
  avatar: '',
  bio: 'Senior Software Architect | Technology Enthusiast | Writer',
  location: 'San Francisco, CA',
  stats: {
    posts: 42,
    followers: 1234,
    following: 567,
  },
  posts: [
    {
      id: 1,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Learn how to design and implement a scalable microservices architecture...',
      likes: 42,
      comments: 15,
    },
    // Add more posts...
  ],
};

export default function Profile() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <ProfileHeader elevation={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar
            src={mockProfile.avatar}
            sx={{ width: 120, height: 120, fontSize: '3rem' }}
          >
            {mockProfile.name[0]}
          </Avatar>
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {mockProfile.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, opacity: 0.9 }}>
              {mockProfile.bio}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {mockProfile.location}
            </Typography>

            <StatsBox>
              <StatItem>
                <Typography variant="h6">{mockProfile.stats.posts}</Typography>
                <Typography variant="body2">Posts</Typography>
              </StatItem>
              <StatItem>
                <Typography variant="h6">{mockProfile.stats.followers}</Typography>
                <Typography variant="body2">Followers</Typography>
              </StatItem>
              <StatItem>
                <Typography variant="h6">{mockProfile.stats.following}</Typography>
                <Typography variant="body2">Following</Typography>
              </StatItem>
            </StatsBox>
          </Box>

          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                opacity: 0.9,
              },
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </ProfileHeader>

      <ContentTabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
      >
        <Tab label="Posts" />
        <Tab label="Drafts" />
        <Tab label="Bookmarks" />
      </ContentTabs>

      <Grid container spacing={3}>
        {mockProfile.posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Paper
              sx={{
                p: 3,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {post.excerpt}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
                <Typography variant="caption">
                  {post.likes} likes
                </Typography>
                <Typography variant="caption">
                  {post.comments} comments
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
