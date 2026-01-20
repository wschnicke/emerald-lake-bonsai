# Claude Development Guide - Emerald Lake Garden

This document provides context and conventions for working on the Emerald Lake Garden bonsai website.

## Project Overview

A blog-focused website for Emerald Lake Garden, showcasing bonsai cultivation practices in the Pacific Northwest. Built with Next.js 15 (App Router), featuring a commit-based publishing workflow where blog posts are written as MDX files and published by committing to the repository.

**Live Site**: https://emeraldlakebonsai.com

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX via `next-mdx-remote`
- **Package Manager**: Yarn (NOT npm)
- **Linting/Formatting**: Biome (NOT Prettier/ESLint)
- **Deployment**: Vercel (automatic deployment on push)

## Tool Preferences

### Critical: Use the Right Tools

1. **Yarn over npm**: Always use `yarn` for package management
   - `yarn install` (not `npm install`)
   - `yarn add` (not `npm install <package>`)
   - `yarn dev` (not `npm run dev`)

2. **Biome over Prettier/ESLint**: Use Biome for all linting and formatting
   - `yarn lint` - check for issues
   - `yarn lint --write` - auto-fix issues
   - Biome handles both linting AND formatting

3. **Tailwind CSS**: All styling uses Tailwind utility classes
   - No CSS modules
   - No styled-components
   - Inline styles only for font feature settings (see below)

## Design Principles

### 1. Simplicity First
- Minimal dependencies
- Static site generation for all pages
- No client-side JavaScript unless necessary
- Server Components by default

### 2. Emerald & Yellow Theme
- Primary: Emerald green (`emerald-600`, `emerald-700`)
- Accent: Yellow (`emerald-accent` = `#F4E285`)
- Neutral: Gray scale for text and backgrounds
- These colors reflect the Pacific Northwest aesthetic

### 3. Typography
Headings use special font feature settings for a distinctive look:

```tsx
style={{ fontFeatureSettings: '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"' }}
```

Apply this to all `<h1>`, `<h2>` elements and other important headings.

### 4. Responsive Design
- Mobile-first approach
- Grid layouts: 1 column mobile → 2 tablet → 3 desktop
- Use Tailwind breakpoints: `md:`, `lg:`

## File Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx   # Individual post page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── not-found.tsx      # 404 page
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/
│   ├── blog/              # Blog-specific components
│   │   ├── BlogPostCard.tsx
│   │   ├── PostHeader.tsx
│   │   └── TagBadge.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── mdx/              # MDX rendering components
│   │   └── MDXComponents.tsx
│   └── ui/               # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
├── content/
│   └── blog/             # MDX blog posts (content files)
├── lib/
│   └── blog.ts           # Blog data fetching utilities
├── types/
│   └── blog.ts           # TypeScript type definitions
└── public/               # Static assets
```

## Blog System Architecture

### Content Management (Commit-Based Publishing)

Blog posts are `.mdx` files in `content/blog/` with frontmatter metadata:

You MUST NEVER change the copy of a blog post. If you are asked to edit the formatting, YOU MUST
retain all original content text.

```mdx
---
title: "Post Title"
date: "2026-01-19"
excerpt: "Brief description"
author: "Will - Emerald Lake Garden"
tags: ["tag1", "tag2"]
published: true  # Set to false for drafts
featuredImage: "/images/post.jpg"  # Optional
---

# Content goes here...
```

**Publishing Workflow**:
1. Create `.mdx` file in `content/blog/`
2. Set `published: false` while drafting
3. Commit to repository (won't appear on site)
4. When ready: change `published: true` and commit
5. Vercel auto-deploys → post goes live

### Blog Utilities (`lib/blog.ts`)

Key functions:
- `getAllPosts()` - Get all posts (including drafts)
- `getPublishedPosts()` - Get only published posts
- `getPostBySlug(slug)` - Get single post by slug
- `getAllPostSlugs()` - Get all slugs for static generation

### Blog Components

1. **BlogPostCard** - Card for blog listing pages
2. **PostHeader** - Metadata display at top of blog posts
3. **TagBadge** - Reusable tag pill component
4. **MDXComponents** - Styled components for MDX rendering

### Static Site Generation

All blog pages use Next.js SSG:

```tsx
// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.metadata.title} | Emerald Lake Garden`,
    description: post.metadata.excerpt,
    openGraph: { /* ... */ },
  };
}
```

## Code Style Guidelines

### 1. Server Components by Default
All components are Server Components unless they need client interactivity.

```tsx
// Good - Server Component (default)
export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <div>{/* ... */}</div>;
}

// Only use 'use client' when necessary
'use client';
export default function InteractiveWidget() {
  const [state, setState] = useState();
  return <div>{/* ... */}</div>;
}
```

### 2. TypeScript Strictness
- All components must have proper types
- Import types with `import type` when possible
- Use interfaces from `types/blog.ts` for blog data

### 3. Tailwind Class Organization
Order classes logically:
1. Layout (flex, grid, block)
2. Sizing (w-, h-, max-w-)
3. Spacing (p-, m-)
4. Typography (text-, font-)
5. Colors (bg-, text-)
6. Effects (hover:, transition-)

```tsx
// Good
<div className="flex items-center gap-4 px-6 py-3 text-lg font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
```

### 4. No Inline Styles (Except Font Features)
Only use inline styles for font feature settings:

```tsx
// Good - font features require inline styles
<h1 style={{ fontFeatureSettings: '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"' }}>

// Bad - use Tailwind instead
<div style={{ padding: '16px', color: 'red' }}>
```

### 5. Component File Naming
- Use PascalCase: `BlogPostCard.tsx`
- One component per file
- Default export for the component

## Running the Project

### Development
```bash
yarn dev          # Start dev server (http://localhost:3000)
yarn build        # Production build
yarn start        # Run production build locally
```

### Code Quality
```bash
yarn tsc          # Type check
yarn lint         # Check linting/formatting
yarn lint --write # Auto-fix linting/formatting issues
```

### Deployment
Automatic via Vercel on `git push` to main branch.

## Content Guidelines

### Blog Post Best Practices

1. **Date Format**: Use ISO format `"2026-01-19"`
2. **Excerpts**: Keep under 160 characters for SEO
3. **Tags**: Use lowercase with hyphens (e.g., `winter-care`, `pacific-northwest`)
4. **Slug**: Generated from filename (use kebab-case)
5. **Author**: Consistently use "Will - Emerald Lake Garden"

### Image Handling

Use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/bonsai.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

Store images in `public/images/`.

## Common Tasks

### Adding a New Blog Post

1. Create `content/blog/my-post-slug.mdx`
2. Add frontmatter with all required fields
3. Set `published: false` initially
4. Write content using MDX
5. Commit to repository
6. When ready to publish: set `published: true` and commit

### Adding a New UI Component

1. Create file in `components/ui/ComponentName.tsx`
2. Define TypeScript interface for props
3. Use Tailwind for all styling
4. Export as default

### Updating the Home Page

Edit `app/page.tsx`. The home page shows:
- Hero section with site title
- 3 most recent blog posts
- About section teaser

## SEO Considerations

1. **Metadata**: Every page has proper title and description
2. **Sitemap**: Auto-generated at `/sitemap.xml`
3. **Open Graph**: Blog posts include OG tags for social sharing
4. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)

## Performance

- All pages are statically generated at build time
- Images use Next.js Image component for optimization
- No client-side JavaScript on blog posts (pure HTML/CSS)
- Minimal bundle size due to Server Components

## Accessibility

- Semantic HTML throughout
- Proper alt text on images
- Color contrast meets WCAG AA standards
- Keyboard navigation support

## Future Enhancements (Not Yet Implemented)

Potential features to add later:
- Tag filtering pages (`/blog/tag/[tag]`)
- Search functionality
- RSS feed
- Pagination for blog listing
- Related posts
- Comments (via Giscus)
- Dark mode

## Questions?

When working on this project:
1. Always check existing patterns before adding new ones
2. Maintain consistency with the established style
3. Keep it simple - avoid over-engineering
4. Test locally before committing
5. Run `yarn tsc && yarn lint --write` before committing

---

**Last Updated**: 2026-01-19
**Maintained By**: Will @ Emerald Lake Garden
