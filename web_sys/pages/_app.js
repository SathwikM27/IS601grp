import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme'; // Adjust the path to where your theme is defined

function MyApp({ Component, pageProps }) {
    console.log("MyApp.js props", pageProps);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;