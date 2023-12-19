import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(fileName) {
  try {
    const markdownDirectory = path.join(process.cwd(), 'pages/sections');
    const fullPath = path.join(markdownDirectory, `${fileName}.md`);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Markdown file not found: ${fullPath}`);
      return null; // Or return a default content
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    return processedContent.toString();
  } catch (error) {
    console.error(`Error processing Markdown file (${fileName}):`, error);
    return null; // Or return a default content
  }
}
