import React from 'react';
import Head from 'next/head';
import { getMarkdownContent } from '../lib/pages';
import MainPageContent from '../components/MainPageContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import AboutUsSection from '@/components/AboutUsSection';
import DishSlider from '@/components/DishSlider';
import ReviewSlider from '../components/ReviewSlider'
import ContactSection from '@/components/ContactSection';
import SubscribeDialog from '@/components/SubscribeDialog';
import CookieConsent from '@/components/CookieConsent';



const YourPage = ({ mainPageContent, aboutUsContent, reviews, contactInfoMarkdown, subscribeDialogText }) => {
        const handleConsentAcceptance = () => {
                // Initialize Google Analytics
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-912B4XCN24');
        }; // Add a closing curly brace here
        const handleConsentDecline = () => {
                // Do something here
        };

    return (
        <><Head> 
                <title>Dragon's Breath Chinese</title>
                <meta name="description" content="Dragon's Breath Chinese restaurant located in New Jersey" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <mneta charset="utf-8" />
                
                </Head>
                <div sx={{backgroundColor: 'black'}}>  
                    <CookieConsent onAccept={handleConsentAcceptance} />
                    <MainPageContent content={mainPageContent} />
                    <ResponsiveAppBar />
                    <AboutUsSection content={aboutUsContent} />
                    <DishSlider />
                    <ReviewSlider content={reviews} />
                    <ContactSection content={contactInfoMarkdown} />
                    <SubscribeDialog subscribeDialogText={subscribeDialogText} />
                    {/* ...other components... */}
            </div></>
    );
};

export async function getStaticProps() {
    const mainPageContent = await getMarkdownContent('main-page-content');
    const aboutUsContent = await getMarkdownContent('about-us');
    const reviews = await getMarkdownContent('reviews', true);
    const contactInfoMarkdown = await getMarkdownContent('contact-info', false, true);
    const subscribeDialogText = await getMarkdownContent('subscribe-dialog-text', false, false, true);

    return {
        props: {
            mainPageContent,
                aboutUsContent,
                reviews,
                contactInfoMarkdown,
                subscribeDialogText,
        },
    };
}

export default YourPage;
