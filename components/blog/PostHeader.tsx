import { format } from "date-fns";
import Image from "next/image";
import { fontFeatures } from "@/lib/fonts";
import type { BlogPostMetadata } from "@/types/blog";
import TagBadge from "./TagBadge";

interface PostHeaderProps {
  metadata: BlogPostMetadata;
  readingTime: string;
}

export default function PostHeader({ metadata, readingTime }: PostHeaderProps) {
  return (
    <header className="mb-12">
      {metadata.featuredImage && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={metadata.featuredImage}
            alt={metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <h1
        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        style={fontFeatures.heading}
      >
        {metadata.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
        <span>{metadata.author}</span>
        <span>•</span>
        <time dateTime={metadata.date}>
          {format(new Date(metadata.date), "MMMM d, yyyy")}
        </time>
        <span>•</span>
        <span>{readingTime}</span>
      </div>

      {metadata.tags && metadata.tags.length > 0 && (
        <div className="flex flex-wrap">
          {metadata.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </header>
  );
}
