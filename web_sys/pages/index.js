import React from 'react';
import { getMarkdownContent } from '../lib/pages';
import MainPageContent from '../components/MainPageContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import AboutUsSection from '@/components/AboutUsSection';
import DishSlider from '@/components/DishSlider';
import ReviewSlider from '../components/ReviewSlider'

const YourPage = ({ mainPageContent, aboutUsContent, reviews }) => {
  // Render the main page with the content passed as a prop
  return (
    <div>
      <MainPageContent content={mainPageContent} />
      <ResponsiveAppBar />
      <AboutUsSection content={aboutUsContent} />
      <DishSlider />
      <ReviewSlider content={reviews} />
      {/* ...other components... */}
    </div>
  );
};

export async function getStaticProps() {
  const mainPageContent = await getMarkdownContent('main-page-content');
  const aboutUsContent = await getMarkdownContent('about-us');
  const reviews = await getMarkdownContent('reviews', true);

  return {
    props: {
      mainPageContent,
        aboutUsContent,
        reviews,
    },
  };
}

export default YourPage;
