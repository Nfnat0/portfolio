import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Chip, Link } from '@mui/material';
import config from '../../config';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = config.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h2" gutterBottom>{project.name}</Typography>
      <Grid container spacing={2}>
        {project.detailImages.map((image, index) => (
          <Grid item xs={12} md={6} key={index}>
            <img src={image} alt="" width="100%" />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
          <Typography variant="h6">Technologies Used</Typography>
          {project.technologies.map((tech, index) => (
            <Chip key={index} label={tech} sx={{ margin: '5px' }} />
          ))}
          <Typography variant="h6" sx={{ marginTop: 2 }}>Features</Typography>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Typography variant="h6" sx={{ marginTop: 2 }}>Project URL</Typography>
          <Link href={project.url} target="_blank" rel="noopener">
            {project.url}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetail;
