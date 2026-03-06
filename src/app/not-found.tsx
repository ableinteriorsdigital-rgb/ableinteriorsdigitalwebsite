import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-black text-primary/20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-light mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
