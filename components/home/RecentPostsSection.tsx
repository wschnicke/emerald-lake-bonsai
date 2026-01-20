import Link from "next/link";
import BlogPostCard from "@/components/blog/BlogPostCard";
import Button from "@/components/ui/Button";
import { fontFeatures } from "@/lib/fonts";
import type { BlogPost } from "@/types/blog";

interface RecentPostsSectionProps {
  posts: BlogPost[];
}

export default function RecentPostsSection({ posts }: RecentPostsSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
        style={fontFeatures.heading}
      >
        Adventures on the Mississippi
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/blog">
          <Button variant="primary">View All Posts</Button>
        </Link>
      </div>
    </section>
  );
}
