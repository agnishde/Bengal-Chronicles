// src/pages/Explore.js

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import heritageSiteImage1 from '../assets/heritageSite1.jpeg';
import heritageSiteImage2 from '../assets/heritageSite2.jpeg';
import heritageSiteImage3 from '../assets/heritageSite3.jpeg';
import culturalPracticeImage1 from '../assets/culturalPractice1.jpeg';
import culturalPracticeImage2 from '../assets/culturalPractice2.jpeg';
import Simple3DScene from '../components/Simple3DScene';

const BackgroundBox = styled(Box)({
  backgroundImage: 'url(https://source.unsplash.com/1600x900/?heritage)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.3)',
});

const Explore = () => {
  return (
    <Container>
      <BackgroundBox>
        <Typography variant="h2" component="h1" gutterBottom>
          Explore Bengali Heritage
        </Typography>
      </BackgroundBox>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Virtual Tours
        </Typography>
        <Typography variant="body1" paragraph>
          Take immersive virtual tours of historical sites across Bengal. Explore these sites in 360 degrees and experience the rich history and architecture.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia>
                <Simple3DScene />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  3D Model Example
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A simple 3D model rendered using Three.js and react-three-fiber.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={heritageSiteImage1}
                alt="Victoria Memorial"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Victoria Memorial
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A grand marble building in Kolkata, dedicated to the memory of Queen Victoria, and now a museum and tourist destination.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour/victoria-memorial">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={heritageSiteImage2}
                alt="Belur Math"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Belur Math
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The headquarters of the Ramakrishna Math and Mission, located on the west bank of the Hooghly River, near Kolkata.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour/belur-math">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={heritageSiteImage3}
                alt="Dakshineswar Kali Temple"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Dakshineswar Kali Temple
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A Hindu temple located in Dakshineswar near Kolkata, West Bengal, India. The temple is dedicated to Bhavatarini, an aspect of Kali.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour/dakshineswar-kali-temple">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Image Recognition
        </Typography>
        <Typography variant="body1" paragraph>
          Upload images of monuments or artifacts, and our AI-powered image recognition system will provide detailed information about them.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/image-recognition">
          Try Image Recognition
        </Button>
      </Box>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Cultural Practices
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the rich cultural practices of Bengal. Learn about traditional arts, crafts, music, dance, and more.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={culturalPracticeImage1}
                alt="Baul Music"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Baul Music
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Baul music is a unique genre of folk music from Bengal, characterized by its spiritual and heartfelt lyrics.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/cultural-practices/baul-music">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={culturalPracticeImage2}
                alt="Terracotta Art"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Terracotta Art
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The terracotta temples of Bishnupur are famous for their intricate carvings and unique architectural style.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/cultural-practices/terracotta-art">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Explore;





