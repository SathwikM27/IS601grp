import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Define your primary color here
      main: '#FFFFFF',
      blk: '#000000',
      blkback: alpha('#000000', 0.9),

    },
    secondary: {
      // Define your secondary color (used in your button)
      main: '#19857b',
    },
    // Add other colors as needed
  },
  typography: {
    h2: {
      fontSize: '2.125rem', // Adjust the font size for <h2> elements
      fontWeight: 500,
      // Add other styles as needed
    },
    h5: {
      fontSize: '1.5rem', // Adjust the font size for <h5> elements
      fontWeight: 400,
      // Add other styles as needed
    },
   
    // Define other typography variants as needed
  },
  // You can also customize components globally
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          // Styles for your contained secondary buttons
          backgroundColor: '#19857b',
          color: 'white',
          '&:hover': {
            backgroundColor: '#106650',
          },
        },
      },
    },
  },
});

export default theme;