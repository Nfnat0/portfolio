import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976D2', // Customize primary color if needed
    },
    secondary: {
      main: '#9C27B0', // Customize secondary color if needed
    },
  },
});

export default theme;
