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
import Link from '@mui/material/Link'


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
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* Here, you can insert an icon like <MenuIcon /> */}
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
      <ResponsiveAppBar />
      <MainPageContent />
      {/* Other components like footer, etc. */}
    </>
  );
};

export default HomePage;
