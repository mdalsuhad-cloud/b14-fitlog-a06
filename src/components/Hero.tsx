import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 pt-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl bg-[#15171c] lg:grid-cols-2">

        {/* banner text-left*/}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into todays plan, and watch
            the weeks work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black transition hover:bg-white"
          >
            Browse Workouts
            <span>→</span>
          </a>
        </div>

        {/* Banner Image Right */}
        <div className="relative min-h-[200px] overflow-hidden">
          <Image
            src="/banner.png"
            alt="banner"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}