import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(fileName) {
  const markdownDirectory = path.join(process.cwd(), 'pages/sections');
  const fullPath = path.join(markdownDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  return processedContent.toString();
}
