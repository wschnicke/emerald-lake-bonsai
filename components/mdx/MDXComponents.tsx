import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-6 mb-6">{children}</h1>
  ),
  h2: ({ children, id, className: _, ...props }) => {
    if (children === "Footnotes") {
      return (
        <h4 id={id} className="text-lg font-bold mb-2 mt-6" {...props}>
          footnotes
        </h4>
      );
    }
    return (
      <h2 id={id} className="text-3xl font-bold mb-4 mt-4" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-2 text-lg leading-relaxed text-gray-700">{children}</p>
  ),
  a: ({ href, children, id, className: _, ...props }) => (
    <Link
      href={href as string}
      id={id}
      className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2 scroll-mt-20"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-1 [&_ul]:ml-6 [&_ul]:mt-1 [&_ol]:ml-6 [&_ol]:mt-1">
      {children}
    </ul>
  ),
  ol: ({ children, className: _, ...props }) => (
    <ol
      className="list-decimal space-y-1 [&_ul]:ml-6 [&_ul]:mt-1 [&_ol]:ml-6 [&_ol]:mt-1"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, id, className: _, ...props }) => (
    <li id={id} className="text-lg text-gray-700 scroll-mt-20" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-emerald-600 pl-4 text-lg italic my-4 text-gray-600">
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
  sup: ({ children, ...props }) => <sup {...props}>{children}</sup>,
  section: ({ children, className: _, ...props }) => (
    <section
      className="mt-4 pt-4 border-t border-gray-200 text-sm [&_ol]:ml-5 [&_li>p]:inline [&_li>p]:mb-0"
      {...props}
    >
      {children}
    </section>
  ),
};
