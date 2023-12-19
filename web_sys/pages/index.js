import React from 'react';
import { getMarkdownContent } from '../lib/pages';
import MainPageContent from '../components/MainPageContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const YourPage = ({ mainPageContent }) => {
  // Render the main page with the content passed as a prop
  return (
    <div>
      <MainPageContent content={mainPageContent} />
      <ResponsiveAppBar />
      {/* ...other components... */}
    </div>
  );
};

export async function getStaticProps() {
  const mainPageContent = await getMarkdownContent('main-page-content');
  console.log("index.js props", mainPageContent);
  return {
    props: {
      mainPageContent,
    },
  };
}

export default YourPage;
