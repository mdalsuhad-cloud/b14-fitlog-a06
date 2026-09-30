"use client";

import Image from "next/image";
import Link from "next/link";

import { Workout } from "../types";
import { usePlan } from "../context/PlanContext";

type Props = {
  workout: Workout;
};

export default function WorkoutDetailsClient({
  workout,
}: Props) {
  const {
    plan,
    saved,
    addToPlan,
    saveForLater,
  } = usePlan();

  const alreadyPlanned = plan.some(
    (item) => item.id === workout.id
  );

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-8 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-xl bg-[#15171c]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={1200}
              height={800}
              priority
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400">
              {workout.muscleGroups.join(" • ")}
            </p>

            <h1 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map(
                (muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#ccff00] px-3 py-1 text-[9px] font-black uppercase text-black"
                  >
                    {muscle}
                  </span>
                )
              )}
            </div>

            {/* Spaces */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#252a32] bg-[#15171c]">

              <Spec
                label="Equipment"
                value={workout.equipment}
              />

              <Spec
                label="Difficulty"
                value={workout.difficulty}
              />

              <Spec
                label="Sets"
                value={String(workout.sets)}
              />

              <Spec
                label="Reps"
                value={workout.reps}
              />

              <Spec
                label="Duration"
                value={`${workout.duration} min`}
              />

              <Spec
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              <Spec
                label="Rating"
                value={`${workout.rating}`}
              />
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-sm font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="font-black text-lime-400">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => addToPlan(workout)}
                disabled={
                  alreadyPlanned ||
                  plan.length >= 5
                }
                className={`rounded-md px-5 py-3 text-xs font-black uppercase ${
                  alreadyPlanned ||
                  plan.length >= 5
                    ? "cursor-not-allowed bg-[#34383f] text-gray-500"
                    : "bg-[#ccff00] text-black hover:bg-white"
                }`}
              >
                ✓{" "}
                {alreadyPlanned
                  ? "Already in plan"
                  : "Add to today's plan"}
              </button>

              <button
                onClick={() => saveForLater(workout)}
                disabled={alreadySaved}
                className={`rounded-md border px-5 py-3 text-xs font-black uppercase ${
                  alreadySaved
                    ? "cursor-not-allowed border-[#34383f] text-gray-600"
                    : "border-[#34383f] text-white hover:border-lime-400 hover:text-lime-400"
                }`}
              >
                ☆{" "}
                {alreadySaved
                  ? "Saved"
                  : "Save for later"}
              </button>

            </div>

            <Link
              href="/"
              className="mt-5 text-xs text-gray-500 hover:text-white"
            >
              ← Back to library
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#252a32] px-5 py-3 last:border-b-0">
      <span className="text-[9px] font-bold uppercase text-gray-500">
        {label}
      </span>

      <span className="text-[10px] font-bold text-gray-200">
        {value}
      </span>
    </div>
  );
}