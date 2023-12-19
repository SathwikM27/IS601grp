import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=G-912B4XCN24`} 
        strategy="afterInteractive"
        async
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;