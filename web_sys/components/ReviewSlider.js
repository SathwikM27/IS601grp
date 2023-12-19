import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const ReviewSlider = ({ content }) => {

    const theme = useTheme();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <IconButton size="large"><ArrowCircleRightIcon sx={{  color: theme.palette.primary.blk}} /></IconButton>,
        prevArrow: <IconButton size="large" ><ArrowCircleLeftIcon sx={{ color: theme.palette.primary.blk}} /></IconButton>,
    };

      return (
        <Box sx={{ minHeight: '100vh', maxWidth: '100%', padding: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center',  backgroundColor: theme.palette.primary.blk  }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: theme.palette.secondary.gold }}>
            Hear from our customers!
          </Typography>
          <Slider {...settings}>
            {content.map((review, index) => (
              <Paper elevation={3} key={index} sx={{ padding: 6, margin: 6, backgroundColor: '#ffffe4', maxWidth: '60%' }}>
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
    

export default ReviewSlider;