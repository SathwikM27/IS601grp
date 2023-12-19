import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Menu, MenuItem,
  Typography, Button, Container, useTheme, useRef
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function ResponsiveAppBar() {
  const pages = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About Us', sectionId: 'about' },
    { name: 'Contact', sectionId: 'contact' },
  
  ];
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.blkback }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.primary.main }}
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
              sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: theme.palette.primary.blkback }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => scrollToSection(page.sectionID)}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => scrollToSection(page.sectionID)}
                sx={{ my: 2, color: theme.palette.primary.main, display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
