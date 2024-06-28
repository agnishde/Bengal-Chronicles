import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import teamPhoto from '../assets/teamPhoto.jpeg'; // Example team photo

const BackgroundBox = styled(Box)({
  backgroundImage: 'url(https://source.unsplash.com/1600x900/?bengal)',
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

const About = () => {
  return (
    <Container>
      <BackgroundBox>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
      </BackgroundBox>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At Bengali Heritage Online, our mission is to celebrate and preserve the rich cultural heritage of Bengal. We aim to provide an immersive and interactive platform for users to explore and learn about the historical sites, cultural practices, and significant events that have shaped Bengal's history.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              We envision a world where the cultural heritage of Bengal is accessible to everyone, regardless of location. Through the use of advanced technologies like AI, VR, and machine learning, we strive to create a digital archive that not only educates but also inspires future generations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" paragraph>
              Integrity, Inclusivity, Innovation, and Education are the core values that drive our project. We believe in providing accurate and engaging content, fostering a community of learners and enthusiasts, and continuously evolving to incorporate the latest technologies and methodologies.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Avatar src={teamPhoto} alt="Team Member" sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }} />
              <Typography variant="h6" component="h3">
                Jane Doe
              </Typography>
              <Typography variant="body2">
                Project Lead
              </Typography>
              <Typography variant="body2" paragraph>
                Jane is a passionate advocate for cultural preservation and leads our project with a vision for a digitally inclusive future.
              </Typography>
            </Paper>
          </Grid>
          {/* Repeat for other team members */}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
