import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch workouts data");
    }

    const data = await res.json();


    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};

const AllWorkouts = async () => {
  const workouts = await getWorkouts();

  if (!workouts || workouts.length === 0) {
    return <div>No workouts found.</div>;
  }

  return (
    <div className="container">
      <div className="px-7 py-8">
        <h2 className="text-4xl font-bold  ">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-lg text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );


};

export default AllWorkouts;