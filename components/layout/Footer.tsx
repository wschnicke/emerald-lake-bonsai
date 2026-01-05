import Link from "next/link";

const letterheadFeatures = {
  fontFeatureSettings: '"ss03", "ss08", "ss09", "ss10", "ss11", "ss13", "ss15"',
};

const fontFeatures = {
  fontFeatureSettings: '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
};

const linkClassName = "text-gray-600 hover:text-emerald-600 transition-colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={letterheadFeatures}>
              Emerald Lake Garden
            </h3>
            <p className="text-gray-600" style={fontFeatures}>
              Puget Sound bonsai journeyman
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={fontFeatures}>
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:will@emeraldlakebonsai.com"
                  className={linkClassName}
                  style={fontFeatures}
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
                  style={fontFeatures}
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
                  style={fontFeatures}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={fontFeatures}>
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={linkClassName} style={fontFeatures}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={linkClassName}
                  style={fontFeatures}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={linkClassName}
                  style={fontFeatures}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p style={fontFeatures}>
            &copy; {currentYear} Emerald Lake Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
