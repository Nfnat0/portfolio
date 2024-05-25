import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Grid, Chip, Link } from '@mui/material';
import config from '../../config';
import StyledButton from '../../components/StyledButton';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = config.projects.findIndex(p => p.id === parseInt(id));
  const project = config.projects[projectIndex];

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  const nextProjectId = config.projects[(projectIndex + 1) % config.projects.length].id;
  const prevProjectId = config.projects[(projectIndex - 1 + config.projects.length) % config.projects.length].id;

  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>{project.name}</Typography>
      <Grid container spacing={2}>
        {project.detailImages.map((image, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: 1, borderRadius: 2 }}>
              <img src={image} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
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
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <StyledButton
            component={RouterLink}
            to={`/projects/${prevProjectId}`}
            variant="contained"
          >
            Previous
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to={`/projects/${nextProjectId}`}
            variant="contained"
          >
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetail;
