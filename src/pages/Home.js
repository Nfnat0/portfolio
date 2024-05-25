import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '../config'; // Import the configuration file
import StyledButton from '../components/StyledButton';

// Home page component to display the home page content
const Home = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>Welcome to My Portfolio</Typography>
      <Typography variant="body1" paragraph>
        Explore my projects and learn more about me.
      </Typography>
      <Grid container spacing={2}>
        {config.projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, borderRadius: 2 }}>
              <Typography variant="h5">{project.name}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <StyledButton
                variant="contained"
                component={Link}
                to={`/projects/${project.id}`}
              >
                Learn More
              </StyledButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
