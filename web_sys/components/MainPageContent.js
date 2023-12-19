
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



  
  

const MainPageContent = ({ content }) => {
  const theme = useTheme(); // Access the theme

  // Extracting data from the HTML content
  const title = content.match(/<h1>(.*?)<\/h1>/)?.[1];
  const subtitle = content.match(/<p>(.*?)<\/p>/)?.[1];

  return (
    <Box sx={{
      backgroundImage: 'url(/images/background.png)',
      padding: theme.spacing(0), // Example of using theme spacing
      color: theme.palette.text.primary,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      height: '100vh',
    }}>
      <Box sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        textAlign: 'center',
        width: '100%' ,
        margin: 'auto',
        marginTop: 'auto',
        borderRadius: '10px',
      }}>
        <Grid container spacing={3} sx={{borderRadius: '10px' }} >
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              dangerouslySetInnerHTML={{ __html: title }}
              sx={{
                color: theme.palette.primary.main, fontFamily: 'Great Vibes', fontSize: '5rem',
              }}
            />
            <Typography 
              variant="h5" 
              gutterBottom 
              dangerouslySetInnerHTML={{ __html: subtitle }}
              sx={{
                color: theme.palette.primary.main, // Use secondary color from theme
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

  export default MainPageContent;


