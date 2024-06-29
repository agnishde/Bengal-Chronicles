import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import heritageSiteImage from '../assets/heritageSite.jpeg';
import culturalPracticeImage from '../assets/culturalPractice.jpeg';
import victoriaMemorialImage from '../assets/victoriaMemorial.jpeg';
import belurMathImage from '../assets/belurMath.jpg';

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

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
}

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
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia component="div">
                <Canvas style={{ height: '200px' }}>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls />
                  <Model modelPath="/path/to/victoriaMemorialModel.gltf" />
                </Canvas>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Victoria Memorial
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A magnificent marble building in Kolkata, dedicated to the memory of Queen Victoria, showcasing a blend of British and Mughal architectural styles.
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
              <CardMedia component="div">
                <Canvas style={{ height: '200px' }}>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls />
                  <Model modelPath="/path/to/belurMathModel.gltf" />
                </Canvas>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Belur Math
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The headquarters of the Ramakrishna Mission, founded by Swami Vivekananda, blending Hindu, Christian, and Islamic motifs as a symbol of unity.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/virtual-tour/belur-math">
                  Start Virtual Tour
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more heritage site cards as needed */}
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
                image={culturalPracticeImage}
                alt="Cultural Practice"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cultural Practice Name
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A brief description of the cultural practice. Explore its history, significance, and how it is practiced today.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/cultural-practices">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more cultural practice cards as needed */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Explore;


