"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type ScrollToTopLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export default function ScrollToTopLink({
  children,
  onClick,
  ...props
}: ScrollToTopLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="/" onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
