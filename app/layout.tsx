import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import ScrollingHeader from "@/components/layout/ScrollingHeader";
import "./globals.css";

const polymath = localFont({
  src: [
    {
      path: "./fonts/polymath/Polymath-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/polymath/Polymath-Black.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-polymath",
});

export const metadata: Metadata = {
  title: {
    default: "Emerald Lake Garden - Puget Sound Bonsai Journeyman",
    template: "%s | Emerald Lake Garden",
  },
  description:
    "Professional bonsai services, education, and workshops in the Puget Sound area. Specializing in repotting, styling, wiring, and maintenance.",
  keywords: [
    "bonsai",
    "puget sound",
    "seattle",
    "gardening",
    "trees",
    "emerald lake",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={polymath.variable}>
      <body className="antialiased">
        <ScrollingHeader />
        <div id="top" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
