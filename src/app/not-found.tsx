import Hero from "../components/Hero";
import LibrarySection from "../components/LibrarySection";
import { getWorkouts } from "../utils/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <LibrarySection
        workouts={workouts}
      />
    </main>
  );
}