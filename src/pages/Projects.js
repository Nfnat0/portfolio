import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import config from '../config';

const Projects = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h2" gutterBottom>My Projects</Typography>
      <Grid container spacing={2}>
        {config.projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, borderRadius: 2 }}>
              <Typography variant="h5">{project.name}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'secondary.main', color: 'white', marginTop: 2 }}
                href={project.url}
                target="_blank"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
