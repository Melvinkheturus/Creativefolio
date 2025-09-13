import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="px-6 py-3 bg-purple-600 rounded-md text-lg hover:bg-purple-700 transition-colors">
        Go back home
      </Link>
    </div>
  );
}