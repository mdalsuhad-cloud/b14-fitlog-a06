export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#30343c] border-t-lime-400" />

            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gray-400">
              Loading workouts…
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}