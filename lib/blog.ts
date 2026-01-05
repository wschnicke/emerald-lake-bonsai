import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogPostMetadata } from '@/types/blog';

const contentDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts from the content/blog directory
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  const posts = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const metadata = data as BlogPostMetadata;
    const readTime = readingTime(content);

    return {
      slug,
      metadata,
      content,
      readingTime: readTime.text,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get only published blog posts
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.metadata.published);
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const metadata = data as BlogPostMetadata;
  const readTime = readingTime(content);

  return {
    slug,
    metadata,
    content,
    readingTime: readTime.text,
  };
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}
