import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import heritageImage from '../assets/heritage.jpg'; // Updated path

const HeroSection = styled('div')({
  backgroundImage: `url(${heritageImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.3)',
});

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <div>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Bengali Heritage Online
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Explore the rich cultural heritage of Bengal
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/explore"
            sx={{ mt: 2 }}
          >
            Explore Now
          </Button>
        </div>
      </HeroSection>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" component="h2">
              Virtual Tours
            </Typography>
            <Typography>
              Experience 360-degree views of historical sites.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" component="h2">
              Image Recognition
            </Typography>
            <Typography>
              Recognize and learn about monuments with AI.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" component="h2">
              Historical Timeline
            </Typography>
            <Typography>
              Explore key events in Bengali history.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
