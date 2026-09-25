// app/workouts/[id]/page.js

import WorkoutDetails from "@/app/components/workout/WorkoutDetails";

const WorkoutPage = async ({ params }) => {
  const { id } = await params;

  // এখানে API call
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const workout = await res.json();

  return (
    <div>
      <WorkoutDetails workout={workout} />
    </div>
  );
};

export default WorkoutPage;