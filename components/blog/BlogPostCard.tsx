import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { parseLocalDate } from "@/lib/blog";
import { fontFeatures } from "@/lib/fonts";
import type { BlogPost } from "@/types/blog";
import TagBadge from "./TagBadge";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { slug, metadata, readingTime } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="block transition-transform hover:scale-105"
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        {metadata.featuredImage && (
          <div className="relative w-full h-48">
            <Image
              src={metadata.featuredImage}
              alt={metadata.title}
              fill
              className="object-cover object-top"
            />
          </div>
        )}

        <div className="p-6">
          <h2
            className="text-2xl font-bold mb-2 text-gray-900"
            style={fontFeatures.heading}
          >
            {metadata.title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <time dateTime={metadata.date}>
              {format(parseLocalDate(metadata.date), "MMM d, yyyy")}
            </time>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

          <p className="text-gray-700 mb-4 line-clamp-3">{metadata.excerpt}</p>

          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex flex-wrap">
              {metadata.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
