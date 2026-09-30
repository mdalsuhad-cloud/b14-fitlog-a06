"use client";

import { usePlan } from "../context/PlanContext";

export default function Toast() {
  const { toast } = usePlan();

  if (!toast) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
      <div className="rounded-lg border border-lime-400 bg-[#17191f] px-5 py-3 text-sm font-bold text-white shadow-2xl">
        <span className="mr-2 text-lime-400">✓</span>
        {toast}
      </div>
    </div>
  );
}