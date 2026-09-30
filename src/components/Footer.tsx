export default function Footer() {
  return (
    <footer className="border-t border-[#20232a] bg-[#0b0c0f] px-5 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <img
            src="/footer-icon.png"
            alt="icon Logo"
            width={25}
            height={25}
            className="h-7 w-7 object-contain"
          />

          <span className="text-xs text-white font-black">FITLOG</span>
        </div>

        <p className="text-[9px] text-white">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}