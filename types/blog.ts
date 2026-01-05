export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags?: string[];
  featuredImage?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
  readingTime: string;
}
