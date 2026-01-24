"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fontFeatures } from "@/lib/fonts";
import ScrollIndicator from "./ScrollIndicator";

const BLUR_DATA_URL_MOBILE =
  "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABQAwCdASoUAA8APzmEuVOvKKWisAgB4CcJQAAG/58bs6aWAAD3LhTPBWvWv4oW8I5MluVlUdsc2H9tN8dCJ9Y/s0SNhtP4/ZETzcTv+9RLMcCFuL61PMbnZ3h4+OOH924XCwOC5P1cETCq68+dxPq0AAA=";

const BLUR_DATA_URL_DESKTOP =
  "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwAwCdASoUAA8APzmEuVOvKKWisAgB4CcJQAAG/58bsnwAAPcuFM8Fa9a/ihbwjkyW5WVR2xzYf203x0In1j+zRI2G0/j9kRPNxO/71EsxwIW4vrU8xudneHj444f3bhcLA4LlD3MCq/HXWRfO4n1aAAA=";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        window.innerHeight *
        (window.innerWidth >= 768
          ? window.innerWidth >= 1024
            ? 1.4
            : 1.2
          : 1);
      setIsVisible(window.scrollY < heroHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen md:h-[120vh] lg:h-[140vh] w-full">
      {/* Hero Background Image - Mobile */}
      <Image
        src="/images/hero-mobile.webp"
        alt=""
        fill
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_MOBILE}
        className="md:hidden object-cover object-top"
        sizes="100vw"
      />

      {/* Hero Background Image - Desktop */}
      <Image
        src="/images/hero.webp"
        alt=""
        fill
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_DESKTOP}
        className="hidden md:block object-cover object-top"
        sizes="100vw"
      />

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div
        className={`sticky top-[50vh] -translate-y-1/2 w-full z-10 text-white px-4 text-center transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile: Vertical Layout */}
        <h1
          className="block md:hidden text-6xl font-bold text-left mb-6 drop-shadow-lg leading-[0.85]"
          style={fontFeatures.letterhead}
        >
          Emerald
          <br />
          Lake
          <br />
          Garden
        </h1>

        {/* Desktop: Horizontal Layout */}
        <h1
          className="hidden md:block text-7xl font-bold mb-6 drop-shadow-lg"
          style={fontFeatures.letterhead}
        >
          Emerald Lake Garden
        </h1>

        <p className="text-xl md:text-3xl font-light max-w-3xl md:mx-auto drop-shadow-md text-left md:text-center">
          Growing together in bonsai practice
        </p>
      </div>

      {/* Scroll Indicator - Only visible over hero */}
      <ScrollIndicator />
    </section>
  );
}
