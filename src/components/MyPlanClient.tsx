"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { usePlan } from "../context/PlanContext";

type Tab = "today" | "saved";

type SortOption =
  | "duration"
  | "calories"
  | "rating";

export default function MyPlanClient() {
  const {
    plan,
    saved,
    done,
    removeFromPlan,
    removeSaved,
    markAsDone,
  } = usePlan();

  const [tab, setTab] =
    useState<Tab>("today");

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const currentItems =
    tab === "today" ? plan : saved;

  const sortedItems = useMemo(() => {
    return [...currentItems].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [currentItems, sortBy]);

  const totalMinutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, item) =>
      total + item.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-8 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div>
          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-xs text-gray-500">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252a32] bg-[#15171c]">

          <Metric
            label="Exercises"
            value={plan.length}
            accent
          />

          <Metric
            label="Minutes"
            value={totalMinutes}
          />

          <Metric
            label="Calories"
            value={totalCalories}
          />

        </div>

        {/* Tabs / Sort */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div className="flex gap-2">
            <button
              onClick={() => setTab("today")}
              className={`rounded-md px-4 py-2 text-[10px] font-black uppercase ${
                tab === "today"
                  ? "bg-[#ccff00] text-black"
                  : "bg-[#15171c] text-gray-500"
              }`}
            >
              Todays Plan
            </button>

            <button
              onClick={() => setTab("saved")}
              className={`rounded-md px-4 py-2 text-[10px] font-black uppercase ${
                tab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "bg-[#15171c] text-gray-500"
              }`}
            >
              Saved
            </button>
          </div>

          <label className="flex items-center gap-2 text-xs text-gray-500">
            Sort By

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as SortOption
                )
              }
              className="rounded-md border border-[#30343c] bg-[#15171c] px-3 py-2 text-xs text-white"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </label>
        </div>

        {/* List */}
        <div className="mt-5 space-y-3">

          {sortedItems.length === 0 ? (
            <EmptyState />
          ) : (
            sortedItems.map((workout) => (
              <WorkoutPlanCard
                key={workout.id}
                workout={workout}
                isDone={done.includes(
                  workout.id
                )}
                isSaved={tab === "saved"}
                onRemove={() =>
                  tab === "today"
                    ? removeFromPlan(
                        workout.id
                      )
                    : removeSaved(
                        workout.id
                      )
                }
                onDone={() =>
                  markAsDone(workout.id)
                }
              />
            ))
          )}

        </div>
      </div>
    </main>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="border-r border-[#252a32] px-4 py-5 last:border-r-0">
      <p className="text-[8px] font-bold uppercase text-gray-500">
        {label}
      </p>

      <p
        className={`mt-2 text-2xl font-black ${
          accent ? "text-lime-400" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-[#252a32] bg-[#101216] text-center">

      <h2 className="text-sm font-black uppercase">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 max-w-xs text-xs text-gray-500">
        Browse the library and add a lift to get
        today moving.
      </p>

      <Link
        href="/"
        className="mt-5 rounded-md bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}

function WorkoutPlanCard({
  workout,
  isDone,
  isSaved,
  onRemove,
  onDone,
}: {
  workout:any;
  isDone: boolean;
  isSaved: boolean;
  onRemove: () => void;
  onDone: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#252a32] bg-[#15171c] p-3 sm:flex-row sm:items-center">

      <Image
        src="/workout-card.png"
        alt="workout"
        width={112}
        height={80}
        className="h-20 w-full rounded-lg object-cover sm:w-28"
      />

      <div className="min-w-0 flex-1">
        <h3
          className={`text-sm font-black uppercase ${
            isDone
              ? "text-gray-500 line-through"
              : ""
          }`}
        >
          {workout.name}
        </h3>

        <p className="mt-1 text-[10px] text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap gap-3 text-[9px] text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-md border border-[#34383f] px-3 py-2 text-[9px] font-bold"
        >
          View Details
        </Link>

        {!isSaved && (
          <button
            onClick={onDone}
            disabled={isDone}
            className="rounded-md bg-[#ccff00] px-3 py-2 text-[9px] font-black text-black disabled:bg-[#34383f] disabled:text-gray-500"
          >
            {isDone
              ? "✓ Done"
              : "✓ Mark as Done"}
          </button>
        )}

        <button
          onClick={onRemove}
          className="rounded-md border border-[#34383f] px-3 py-2 text-[9px] font-bold text-gray-400 hover:border-red-500 hover:text-red-400"
        >
          ×
        </button>
      </div>
    </div>
  );
}