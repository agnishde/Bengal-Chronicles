
import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../index.css'; 

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/heritage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000', 
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.6)', 
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Bengali Chronicles
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Explore the rich cultural heritage of Bengal
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={Link} 
            to="/explore"
            sx={{ mt: 2, mb: 4 }}
          >
            Explore Now
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Button 
                variant="outlined" 
                size="large" 
                component={Link} 
                to="/explore"
                sx={{ mt: 2, mb: 2, color: '#000', borderColor: '#000' }}
              >
                Virtual Tours
              </Button>
              <Typography variant="body1">
                Experience 360-degree views of historical sites.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Button 
                variant="outlined" 
                size="large" 
                component={Link} 
                to="/image-recognition"
                sx={{ mt: 2, mb: 2, color: '#000', borderColor: '#000' }}
              >
                Image Recognition
              </Button>
              <Typography variant="body1">
                Recognize and learn about monuments with AI.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Button 
                variant="outlined" 
                size="large" 
                component={Link} 
                to="/historical-timeline"
                sx={{ mt: 2, mb: 2, color: '#000', borderColor: '#000' }}
              >
                Historical Timeline
              </Button>
              <Typography variant="body1">
                Explore key events in Bengali history.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

