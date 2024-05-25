import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

// Projects page component to display the list of projects
const Projects = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h2" gutterBottom>My Projects</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, borderRadius: 2 }}>
            <Typography variant="h5">Project 1</Typography>
            <Typography variant="body2">Description of project 1.</Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>Learn More</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, borderRadius: 2 }}>
            <Typography variant="h5">Project 2</Typography>
            <Typography variant="body2">Description of project 2.</Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>Learn More</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, borderRadius: 2 }}>
            <Typography variant="h5">Project 3</Typography>
            <Typography variant="body2">Description of project 3.</Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
