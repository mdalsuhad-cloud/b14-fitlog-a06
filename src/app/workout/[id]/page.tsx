import { notFound } from "next/navigation";

import { getWorkoutById } from "../../../utils/api";
import WorkoutDetailsClient from "../../../components/WorkoutDetailsClient";

type Params = Promise<{
  id: string;
}>;

export default async function WorkoutDetailsPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <WorkoutDetailsClient
      workout={workout}
    />
  );
}