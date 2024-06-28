import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ImageRecognition = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Image Recognition
        </Typography>
        <Typography variant="body1">
          This is where the image recognition content will go.
        </Typography>
      </Box>
    </Container>
  );
};

export default ImageRecognition;
