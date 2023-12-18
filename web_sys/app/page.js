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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Paper from '@mui/material/Paper';



const reviews = [

  {
    text: "Delicious Chinese, I really like the chicken and broccoli here, good price too with fair portions, highly recommended for pickup and eating out great experience eating in store also. Workers there take pride in their food and it shows in the taste.",
    author: "Eli S.",
    rating: 5,
  },
  {
    text: "Excellent and expedient service and the food exceeded that! Delicious entrees seasoned perfectly, numerous gluten-free options. Authentic is right! And don’t forget the churros for dessert- amazing!",
    author: "E.W.",
    rating: 4,
  },
  {
    text: "This Chinese restaurant is a gem! The flavors are incredible and the portions are generous. The staff is friendly and attentive. I highly recommend trying their General Tso's chicken and fried rice.",
    author: "Sarah L.",
    rating: 5,
  },
  {
    text: "I've been coming to this Chinese restaurant for years and it never disappoints. The food is consistently delicious and the service is top-notch. Their hot and sour soup is a must-try!",
    author: "John D.",
    rating: 5,
  },
  {
    text: "If you're craving Chinese food, look no further. This restaurant has a wide variety of dishes to choose from and each one is packed with flavor. The prices are reasonable and the portions are generous. You won't be disappointed!",
    author: "Emily W.",
    rating: 4,
  }
  
];


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

const AboutUsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          {/* Assume the image is in the public/images directory */}
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2, // You can adjust the border radius as needed
            }}
            src="/images/about.png" // Replace with your actual image path
            alt="Delicious Dish"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'secondary.main' }}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Dragons Breath Chinese Restaurant, located in Journal Square, NJ, is renowned for its
            exceptional Chinese cuisine, excellent service, and friendly staff. This local favorite
            emphasizes modern twists on classic dishes, with a commitment to using only high-quality,
            fresh ingredients. It's a great choice for dining in, takeout, or delivery.
          </Typography>
          {/* Add the logo or any other content if needed */}
        </Grid>
      </Grid>
    </Container>
  );
};

const DishSlider = () => {
  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <IconButton size= "large"><ArrowForwardIosIcon /></IconButton>,
    prevArrow: <IconButton size= "large"><ArrowBackIosIcon /></IconButton>,
  };

  return (
    <Box sx={{ maxWidth: '100%', padding: 2, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Featuring
      </Typography>
      <Slider {...settings}>
        {/* Map through your dishes here */}
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/soup-dish.png" alt="Soups" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Soups</Typography>
        </Box>
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/chicken-dish.png" alt="Beef & Chicken" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Beef & Chicken</Typography>
        </Box>
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/dish1.jpg" alt="Vegetarian" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Vegetarian</Typography>
        </Box>
        {/* Add more slides as needed */}
      </Slider>
    </Box>
  );
};

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <IconButton><ArrowForwardIosIcon /></IconButton>,
    prevArrow: <IconButton><ArrowBackIosIcon /></IconButton>,
  };

  return (
    <Box sx={{ minHeight: '100vh', maxWidth: '100%', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Review
      </Typography>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Paper elevation={3} key={index} sx={{ padding: 2, margin: 2, backgroundColor: '#ffe0b2' }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: 2 }}>
              “{review.text}”
            </Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="subtitle2" sx={{ display: 'block', marginTop: 1 }}>
              {review.author}
            </Typography>
          </Paper>
        ))}
      </Slider>
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
      <AboutUsSection />
      <DishSlider />
      <ReviewSlider />
      {/* Other components like footer, etc. */}
    </>
  );
};

export default HomePage;
