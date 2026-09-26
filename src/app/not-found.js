import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0d0f13] px-4 text-center text-white">
      <h1 className="text-5xl font-extrabold uppercase">404</h1>
      <p className="mt-3 max-w-md text-sm text-gray-500">
        This page doesn&apos;t exist. Maybe the workout you&apos;re looking
        for was never added — or the link is broken.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        Back to workouts
      </Link>
    </main>
  );
}