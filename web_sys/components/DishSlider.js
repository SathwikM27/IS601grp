import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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
    nextArrow: <IconButton size="large"><ArrowCircleRightIcon sx={{ color: theme.palette.primary.blk}} /></IconButton>,
    prevArrow: <IconButton size="large" ><ArrowCircleLeftIcon sx={{ color: theme.palette.primary.blk}} /></IconButton>,
  };

  return (
    <Box sx={{ maxWidth: '100%', padding: 6, mx: 'auto', backgroundColor: theme.palette.primary.blk }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center',  color: theme.palette.secondary.gold  }}>
        Featuring
      </Typography>
      <Slider {...settings}>
        {/* Map through your dishes here */}
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/soup-dish.png" alt="Soups" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center',  color: theme.palette.secondary.gold }}>Soups</Typography>
        </Box>
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/chicken-dish.png" alt="Beef & Chicken" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center',  color: theme.palette.secondary.gold }}>Beef & Chicken</Typography>
        </Box>
        <Box  sx={{ padding: '20px' }}>
          <img src="/images/dish1.jpg" alt="chicken" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ textAlign: 'center',  color: theme.palette.secondary.gold }}>Chicken</Typography>
        </Box>
        {/* Add more slides as needed */}
      </Slider>
    </Box>
  );
};

export default DishSlider;
