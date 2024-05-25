import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1" paragraph>
        Here you can write about your background, skills, and experiences. I am a full-stack developer with experience in various technologies.
      </Typography>
    </Box>
  );
};

export default About;
