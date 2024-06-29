// src/pages/HistoricalTimeline.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HistoricalTimeline = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Historical Timeline
        </Typography>
        <Typography variant="body1" paragraph>
          Explore key events in Bengali history. (Content to be added)
        </Typography>
      </Box>
    </Container>
  );
};

export default HistoricalTimeline;
