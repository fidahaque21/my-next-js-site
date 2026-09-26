

import WorkoutDetails from "@/app/components/workout/WorkoutDetails";
import { notFound } from "next/navigation";

const WorkoutPage = async ({ params }) => {
  const { id } = await params;

  //  API call
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );
   if (!res.ok) {
    notFound();
  }

  const workout = await res.json();
  if (!workout || !workout.id) {
    notFound();
  }

  return (
    <div>
      <WorkoutDetails workout={workout} />
    </div>
  );
};

export default WorkoutPage;