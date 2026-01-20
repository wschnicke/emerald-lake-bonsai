interface TagBadgeProps {
  tag: string;
}

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-600 text-white rounded-full mr-2 mb-2">
      {tag}
    </span>
  );
}
