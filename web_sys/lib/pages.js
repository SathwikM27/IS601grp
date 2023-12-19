import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(fileName, returnAsArray = false, returnAsObject = false, returnAsText = false) {
  try {
    const markdownDirectory = path.join(process.cwd(), 'pages/sections');
    const fullPath = path.join(markdownDirectory, `${fileName}.md`);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Markdown file not found: ${fullPath}`);
      return null; // Or return a default content
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    if (returnAsArray) {
        // Split the content by triple dashes '---' and filter out empty strings
        const rawSections = fileContents.split(/(?=^---)/gm).filter(Boolean);
        const reviews = [];
  
        for (let i = 0; i < rawSections.length; i += 2) {
          const metaData = rawSections[i] || '';
          const reviewText = rawSections[i + 1] || '';
  
          const combinedContent = `${metaData}\n${reviewText}`;
          const { data, content } = matter(combinedContent);
  
          reviews.push({
            author: data.author,
            rating: data.rating,
            text: content.trim(),
          });
        }
  
        return reviews;
      } else if (returnAsObject) {
        // New logic for parsing key-value pairs (like contact info)
        const { data } = matter(fileContents);
        return data; // Returns an object with key-value pairs
      } else if (returnAsText) {
        // Logic for returning plain text content
        return fileContents.trim();
        }
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    return processedContent.toString();
  } catch (error) {
    console.error(`Error processing Markdown file (${fileName}):`, error);
    return null; // Or return a default content
  }
}
