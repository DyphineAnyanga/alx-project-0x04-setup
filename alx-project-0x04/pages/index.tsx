import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <Link href="/counter-app">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go to Counter App
        </button>
      </Link>
    </main>
  );
}
