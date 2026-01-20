"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled past viewport height
      setIsVisible(window.scrollY < window.innerHeight * 0.6);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes bounce-pause {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(25%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ animation: 'bounce-pause 2s ease-in-out infinite' }}
      >
      <svg
        className="w-12 h-12 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Scroll down"
        role="img"
      >
        {/* Groovy rounded chevrons - funk album vibes */}
        <path d="M12 14.5c-.4 0-.8-.15-1.1-.45l-4.5-4.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0L12 10.75l3.4-3.4c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4.5 4.5c-.3.3-.7.45-1.1.45z" />
        <path d="M12 20.5c-.4 0-.8-.15-1.1-.45l-4.5-4.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0L12 16.75l3.4-3.4c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4.5 4.5c-.3.3-.7.45-1.1.45z" />
      </svg>
    </div>
    </>
  );
}
