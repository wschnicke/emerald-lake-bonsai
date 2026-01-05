import Link from "next/link";

const fontFeatures = {
  fontFeatureSettings: '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-emerald-50 to-white px-4 py-16">
      <div className="max-w-4xl text-center">
        {/* 404 Number */}
        <h1
          className="text-9xl font-bold text-emerald-600 mb-4"
          style={fontFeatures}
        >
          404
        </h1>

        {/* Main Message */}
        <h2
          className="text-3xl font-bold text-foreground mb-6"
          style={fontFeatures}
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-600 mb-8 max-w-md sm:max-w-2xl mx-auto"
          style={fontFeatures}
        >
          Like a bonsai that needs pruning, this page seems to have wandered off
          the path. Let's guide you back to where you need to be.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
            style={fontFeatures}
          >
            Return Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-600 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            style={fontFeatures}
          >
            Visit Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
