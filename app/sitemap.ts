import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://emeraldlakebonsai.com/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: "https://emeraldlakebonsai.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://emeraldlakebonsai.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://emeraldlakebonsai.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...blogPosts];
}
