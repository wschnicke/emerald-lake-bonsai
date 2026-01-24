"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fontFeatures } from "@/lib/fonts";

const navLinks = [
  { href: "/#top", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function ScrollingHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomepage = pathname === "/";
  const showLightText = isHomepage && !isScrolled;

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const baseHeaderClasses = "top-0 z-50 transition-all duration-1000";
  const headerClasses = showLightText
    ? `fixed left-0 right-0 bg-transparent border-transparent ${baseHeaderClasses}`
    : `${
        isHomepage ? "fixed left-0 right-0" : "sticky"
      } bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-md ${baseHeaderClasses}`;

  const linkClasses = showLightText
    ? "text-white hover:text-emerald-300 transition-colors"
    : "text-foreground hover:text-emerald-600 transition-colors";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/#top"
            className={`text-2xl font-bold ${linkClasses}`}
            style={fontFeatures.letterhead}
          >
            Emerald Lake Garden
          </Link>

          <ul className="flex gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-medium ${linkClasses}`}
                  style={fontFeatures.heading}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
