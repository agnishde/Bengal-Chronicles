// src/pages/Explore.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import heritageSiteImage from '../assets/heritage.jpg';
import victoriaMemorialImage from '../assets/victoriaMemorial.jpeg';
import belurMathImage from '../assets/belurMath.jpeg';
import dakshineswarImage from '../assets/dakshineswar.jpeg';

const Explore = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Virtual Tours
        </Typography>
        <Typography variant="body1" paragraph>
          Take immersive virtual tours of historical sites across Bengal. Explore these sites in 360 degrees and experience the rich history and architecture.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={victoriaMemorialImage}
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
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={belurMathImage}
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
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={dakshineswarImage}
                alt="Dakshineswar Kali Temple"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Dakshineswar Kali Temple
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A famous Hindu temple located in Dakshineswar, Kolkata, dedicated to the goddess Kali.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour/dakshineswar-kali-temple">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more heritage site cards as needed */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Explore;






