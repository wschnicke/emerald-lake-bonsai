import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import PostHeader from "@/components/blog/PostHeader";
import TagBadge from "@/components/blog/TagBadge";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.metadata.published) {
    return {};
  }

  return {
    title: `${post.metadata.title} | Emerald Lake Garden`,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      type: "article",
      publishedTime: post.metadata.date,
      images: post.metadata.featuredImage ? [post.metadata.featuredImage] : [],
      tags: post.metadata.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.metadata.published) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <PostHeader metadata={post.metadata} readingTime={post.readingTime} />

      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {post.metadata.tags && post.metadata.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags</h3>
          <div className="flex flex-wrap">
            {post.metadata.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link
          href="/blog"
          className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
        >
          <span className="mr-2">←</span>
          Back to all posts
        </Link>
      </div>
    </article>
  );
}
