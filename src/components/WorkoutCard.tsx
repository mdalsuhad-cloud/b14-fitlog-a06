"use client";

import Link from "next/link";
import Image from "next/image";
import { Workout } from "../types";

type Props = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-[#242830] bg-[#15171c] transition hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative h-66 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-full w-full object-fill transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-2 py-1 text-[8px] font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-3 text-sm font-black uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 truncate text-[10px] text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-3 text-[9px] text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}