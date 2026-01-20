"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fontFeatures } from "@/lib/fonts";

export default function ScrollingHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Only use transparent header on homepage
  const transparent = pathname === "/";

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const headerClasses = transparent
    ? isScrolled
      ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      : "bg-transparent border-transparent"
    : "bg-white/90 backdrop-blur-sm border-b border-gray-200";

  const textClasses =
    transparent && !isScrolled ? "text-white" : "text-foreground";
  const hoverClasses =
    transparent && !isScrolled
      ? "hover:text-emerald-300"
      : "hover:text-emerald-600";

  // Use fixed positioning on homepage, sticky on other pages
  const positionClass = transparent ? "fixed" : "sticky";

  return (
    <header
      className={`${positionClass} top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-2xl font-bold ${textClasses} ${hoverClasses} transition-colors`}
            style={fontFeatures.letterhead}
          >
            Emerald Lake Garden
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className={`${textClasses} ${hoverClasses} transition-colors font-medium`}
                style={fontFeatures.heading}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${textClasses} ${hoverClasses} transition-colors font-medium`}
                style={fontFeatures.heading}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${textClasses} ${hoverClasses} transition-colors font-medium`}
                style={fontFeatures.heading}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
