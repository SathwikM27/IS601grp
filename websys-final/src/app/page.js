import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import Head from 'next/head';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Restaurant Name
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

const MainPageContent = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Content such as welcome message, dish images, and order button */}
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>Welcome to our restaurant!</Typography>
          <Typography variant="h5" gutterBottom>Come and try our dishes!</Typography>
          <Button variant="contained" color="secondary">Order Now</Button>
        </Grid>
        {/* Other content and components */}
      </Grid>
    </Container>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Restaurant Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavigationBar />
      <MainPageContent />
      {/* Other components like footer, etc. */}
    </>
  );
};

export default HomePage;
