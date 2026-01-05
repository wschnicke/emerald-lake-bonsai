import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-gray-700">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-600">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 rounded px-2 py-1 text-sm font-mono text-gray-800">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto my-4">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt as string}
      width={800}
      height={600}
      className="rounded-lg my-8"
    />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
};
