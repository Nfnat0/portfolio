import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '../config';
import StyledButton from '../components/StyledButton';

// Projects page component to display the list of projects
const Projects = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h2" gutterBottom>My Projects</Typography>
      <Grid container spacing={2}>
        {config.projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5">{project.name}</Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  component={Link}
                  to={`/projects/${project.id}`}
                  fullWidth
                >
                  Learn More
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
