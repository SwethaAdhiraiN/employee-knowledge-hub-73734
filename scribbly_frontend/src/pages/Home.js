import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Grid,
  styled,
} from '@mui/material';
import {
  Bookmark,
  BookmarkBorder,
  FavoriteBorder,
  Favorite,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const TagsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

// Mock data - replace with actual API calls
const mockPosts = [
  {
    id: 1,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn how to design and implement a scalable microservices architecture using modern tools and best practices...',
    author: {
      name: 'John Doe',
      avatar: '',
    },
    tags: ['Architecture', 'Microservices', 'Backend'],
    likes: 42,
    saved: false,
    liked: true,
    createdAt: new Date(2023, 7, 15),
  },
  // Add more mock posts...
];

export default function Home() {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Latest Posts
      </Typography>

      <Grid container spacing={3}>
        {mockPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <StyledCard onClick={() => handlePostClick(post.id)}>
              <CardContent>
                <AuthorSection>
                  <Avatar src={post.author.avatar} sx={{ mr: 2 }}>
                    {post.author.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {post.author.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                    </Typography>
                  </Box>
                </AuthorSection>

                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {post.excerpt}
                </Typography>

                <TagsSection>
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tag/${tag.toLowerCase()}`);
                      }}
                    />
                  ))}
                </TagsSection>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 2,
                    gap: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Toggle like
                    }}
                  >
                    {post.liked ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                  <Typography variant="caption">{post.likes}</Typography>

                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Toggle save
                    }}
                  >
                    {post.saved ? <Bookmark /> : <BookmarkBorder />}
                  </IconButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
