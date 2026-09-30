"use client";

import { useMemo, useState } from "react";

import { Workout } from "../types";
import WorkoutCard from "./WorkoutCard";

type Props = {
  workouts: Workout[];
};

type SortOption = "duration" | "calories" | "rating";

export default function LibrarySection({
  workouts,
}: Props) {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-4 py-10 lg:px-8"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>
          
          <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort by*/}
        <label className="flex items-center gap-2 text-xs text-gray-400">
          Sort By

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as SortOption
              )
            }
            className="rounded-md border border-[#30343c] bg-[#15171c] px-3 py-2 text-xs text-white outline-none"
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
}