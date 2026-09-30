"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = usePlan();

  const workoutActive = pathname === "/";
  const planActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#20232a] bg-[#0b0c0f]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-white transition hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="FITLOG Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
              priority
            />

            <span className="text-sm font-black tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              workoutActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              planActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="hidden items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase text-black sm:flex"
          >
            Plan
            <span>{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="hidden items-center gap-2 rounded-full border border-[#41444c] px-3 py-1.5 text-[10px] font-black uppercase text-gray-300 sm:flex"
          >
            Saved
            <span>{saved.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black sm:hidden"
          >
            {plan.length}
          </Link>
        </div>
      </div>
    </header>
  );
}