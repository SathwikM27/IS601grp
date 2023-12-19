import React from 'react';
import { getMarkdownContent } from '../lib/pages';
import MainPageContent from '../components/MainPageContent';

const YourPage = ({ mainPageContent }) => {
  // Render the main page with the content passed as a prop
  return (
    <div>
      <MainPageContent content={mainPageContent} />
      {/* ...other components... */}
    </div>
  );
};

export async function getStaticProps() {
  const mainPageContent = await getMarkdownContent('main-page-content');
  return {
    props: {
      mainPageContent,
    },
  };
}

export default YourPage;
