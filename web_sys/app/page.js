'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';





const pages = [
  { name: 'Home', ref: React.createRef() },
  { name: 'About Us', ref: React.createRef() },
  { name: 'Contact Us', ref: React.createRef() }
  // Note: 'Menu' is not included since it links to a different page
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (ref) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };

  return (
    
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleScrollToSection(page.ref)}>
                  {page.name}
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/menu" passHref>
                  <Typography textAlign="center" component="a">Menu</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleScrollToSection(page.ref)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            <Link href="/menu" passHref>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Menu
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}


const MainPageContent = () => {
  return (
    <Box sx={{
      backgroundImage: 'url(/images/background.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      pt: 10,
      display: 'flex', // Added to center the Grid container
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
    }}>
      {/* Enclose the Grid items in a Box with a translucent background */}
      <Box sx={{
        width: '100%', // You can adjust this to change the width of the translucent box
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
        padding: '1em', // Add some padding around the content
        borderRadius: '8px', // Optional: rounded corners for the box
      }}>
        <Grid container spacing={3}>
          {/* Content such as welcome message, dish images, and order button */}
          <Grid item xs={12} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the items in the grid column
            justifyContent: 'center', // Center vertically in the grid column
          }}>
            <Typography variant="h2" gutterBottom>Re-invented Chinese</Typography>
            <Typography variant="h5" gutterBottom>Sichuan Spice</Typography>
            <Button variant="contained" color="secondary">Order Now</Button>
          </Grid>
          {/* Other content and components */}
        </Grid>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Restaurant Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ResponsiveAppBar />
      <MainPageContent />
      {/* Other components like footer, etc. */}
    </>
  );
};

export default HomePage;
