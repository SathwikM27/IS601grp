import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutUsSection = ({ content }) => {
    const theme = useTheme();
    // Assuming `content` is the HTML string obtained from the Markdown
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 2,
                        }}
                        src="/images/about.png"
                        alt="Delicious Dish"
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ color: theme.palette.secondary.main }}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUsSection;
