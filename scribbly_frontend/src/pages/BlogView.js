import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Paper,
  styled,
} from '@mui/material';
import {
  Bookmark,
  BookmarkBorder,
  FavoriteBorder,
  Favorite,
  Share,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const BlogContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 800,
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius,
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const CoverImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 400,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
}));

const ContentSection = styled(Box)(({ theme }) => ({
  '& h1, & h2, & h3': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  '& p': {
    marginBottom: theme.spacing(2),
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
  '& img': {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  '& pre': {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

const InteractionBar = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

// Mock data - replace with API call
const mockPost = {
  id: 1,
  title: 'Building Scalable Microservices Architecture',
  content: `
    <h1>Introduction</h1>
    <p>Microservices architecture has become increasingly popular in modern software development...</p>
    <h2>Key Principles</h2>
    <p>When designing microservices, there are several key principles to keep in mind...</p>
    <pre><code>const service = new MicroService();
service.start();</code></pre>
  `,
  coverImage: 'https://picsum.photos/800/400',
  author: {
    name: 'John Doe',
    avatar: '',
    bio: 'Senior Software Architect',
  },
  publishedAt: new Date(2023, 7, 15),
  tags: ['Architecture', 'Microservices', 'Backend'],
  likes: 42,
  saved: false,
  liked: false,
};

export default function BlogView() {
  const { id } = useParams();
  const [liked, setLiked] = React.useState(mockPost.liked);
  const [saved, setSaved] = React.useState(mockPost.saved);
  const [likesCount, setLikesCount] = React.useState(mockPost.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    // Add toast notification here
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, position: 'relative' }}>
      <InteractionBar>
        <IconButton onClick={handleLike}>
          {liked ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
        <Typography variant="caption">{likesCount}</Typography>
        
        <IconButton onClick={handleSave}>
          {saved ? <Bookmark /> : <BookmarkBorder />}
        </IconButton>
        
        <IconButton onClick={handleShare}>
          <Share />
        </IconButton>
      </InteractionBar>

      <BlogContainer elevation={2}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {mockPost.title}
        </Typography>

        <AuthorSection>
          <Avatar src={mockPost.author.avatar} sx={{ width: 56, height: 56, mr: 2 }}>
            {mockPost.author.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {mockPost.author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mockPost.author.bio}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDistanceToNow(mockPost.publishedAt, { addSuffix: true })}
            </Typography>
          </Box>
        </AuthorSection>

        <CoverImage src={mockPost.coverImage} alt={mockPost.title} />

        <Box sx={{ mb: 3 }}>
          {mockPost.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              sx={{ mr: 1 }}
            />
          ))}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <ContentSection
          dangerouslySetInnerHTML={{ __html: mockPost.content }}
        />
      </BlogContainer>
    </Box>
  );
}
