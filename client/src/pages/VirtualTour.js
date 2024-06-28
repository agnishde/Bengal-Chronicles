import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const VirtualTour = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Virtual Tour
        </Typography>
        <Typography variant="body1">
          This is where the virtual tour content will go.
        </Typography>
      </Box>
    </Container>
  );
};

export default VirtualTour;

