import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-emerald-600 transition-colors">
            Emerald Lake Garden
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-foreground hover:text-emerald-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-foreground hover:text-emerald-600 transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-foreground hover:text-emerald-600 transition-colors font-medium"
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
