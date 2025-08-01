import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Chip,
  Typography,
  Autocomplete,
  styled,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { gradients } from '../styles/theme';

const EditorContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const PublishButton = styled(Button)(({ theme }) => ({
  background: gradients.primary,
  color: theme.palette.common.white,
  '&:hover': {
    background: gradients.subtle,
  },
}));

const categories = [
  'Technology',
  'Leadership',
  'Design',
  'Product',
  'Engineering',
  'Culture',
];

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    ['link', 'image', 'code-block'],
    ['clean']
  ],
};

export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  const handlePublish = async () => {
    // Implement blog post publishing logic
    const post = {
      title,
      content,
      categories: selectedCategories,
      coverImage,
    };
    console.log('Publishing post:', post);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Create New Post
      </Typography>

      <EditorContainer elevation={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            sx: { fontSize: '1.5rem', fontWeight: 600 }
          }}
        />

        <Autocomplete
          multiple
          options={categories}
          value={selectedCategories}
          onChange={(_, newValue) => setSelectedCategories(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Select categories"
              sx={{ mb: 3 }}
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                key={option}
              />
            ))
          }
        />

        <Box sx={{ mb: 3 }}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="cover-image"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setCoverImage(file);
              }
            }}
          />
          <label htmlFor="cover-image">
            <Button
              variant="outlined"
              component="span"
              fullWidth
              sx={{
                height: 100,
                border: '2px dashed',
                borderRadius: 2,
              }}
            >
              {coverImage ? (
                <Typography>
                  {coverImage.name}
                </Typography>
              ) : (
                <Typography>
                  Upload Cover Image
                </Typography>
              )}
            </Button>
          </label>
        </Box>

        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          placeholder="Write your story..."
          style={{ height: '400px', marginBottom: '50px' }}
        />

        <Box sx={{ display: 'flex', gap: 2, mt: 8 }}>
          <Button
            variant="outlined"
            color="inherit"
          >
            Save Draft
          </Button>
          <PublishButton
            variant="contained"
            onClick={handlePublish}
          >
            Publish
          </PublishButton>
        </Box>
      </EditorContainer>
    </Box>
  );
}
