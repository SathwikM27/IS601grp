import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useTheme } from '@mui/material/styles';

const ContactSection = ({ content }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ '& > :not(style)': { m: 2 } }}>
        <IconButton color="primary" href={content.instagram}>
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton color="primary" href={content.facebook}>
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton color="primary" href={content.pinterest}>
          <PinterestIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box /* ... */>
        <Typography variant="body1" paragraph>
          {content.address}
          <br />
          {content.hours}
          <br />
          Phone: {content.phone}
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactSection;