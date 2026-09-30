import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0f] px-5 text-white">
      <div className="text-center">

        <p className="text-sm font-black text-lime-400">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase">
          Workout Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
}