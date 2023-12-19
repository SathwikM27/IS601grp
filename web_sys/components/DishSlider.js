import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const DishSlider = () => {
  const theme = useTheme(); // Use theme for styling


  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <IconButton size="large"><ArrowForwardIosIcon /></IconButton>,
    prevArrow: <IconButton size="large"><ArrowBackIosIcon /></IconButton>,
  };

  return (
    <Box sx={{ maxWidth: '100%', padding: 1, mx: 'auto' }}>
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

export default DishSlider;
