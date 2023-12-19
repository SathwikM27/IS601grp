import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const ReviewSlider = ({ content }) => {
    console.log("Type of content:", typeof content); // Debugging
    console.log("Content:", content);
    const theme = useTheme();
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
            {content.map((review, index) => (
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
    

export default ReviewSlider;