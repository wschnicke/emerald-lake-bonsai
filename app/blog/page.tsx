import type { Metadata } from "next";
import BlogPostCard from "@/components/blog/BlogPostCard";
import Container from "@/components/ui/Container";
import { getPublishedPosts } from "@/lib/blog";
import { fontFeatures } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Blog | Emerald Lake Garden",
  description:
    "Bonsai care tips, techniques, and journey updates from the Pacific Northwest",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <Container>
      <div>
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            style={fontFeatures.heading}
          >
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Musings and ramblings on bonsai art, philosophy, and practice
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="pt-8 text-center text-gray-600">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
