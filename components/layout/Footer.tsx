import Link from "next/link";
import { fontFeatures } from "@/lib/fonts";

const linkClassName = "text-gray-600 hover:text-emerald-600 transition-colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={fontFeatures.letterhead}
            >
              Emerald Lake Garden
            </h3>
            <p className="text-gray-600" style={fontFeatures.heading}>
              Will Schnicke
              <br />
              <a
                href="mailto:will@emeraldlakebonsai.com"
                className="underline hover:text-emerald-600 transition-colors"
              >
                will@emeraldlakebonsai.com
              </a>
              <br />
              Puget Sound bonsai journeyman
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={fontFeatures.heading}>
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:will@emeraldlakebonsai.com"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/emeraldlakebonsai.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  Bluesky
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/emeraldlakebonsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={fontFeatures.heading}>
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#top"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={linkClassName}
                  style={fontFeatures.heading}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p style={fontFeatures.heading}>
            &copy; {currentYear} Emerald Lake Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
