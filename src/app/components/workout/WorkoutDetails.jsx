const WorkoutDetails = ({ workout }) => {
  const {
    name,
    image,
    muscleGroups,
    description,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  return (
    <section className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        {/* Left - Image */}
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]">
          <img
            src={image}
            alt={name}
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col">

          {/* Title */}
          <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            {name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#15181f]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Equipment
              </span>
              <span className="text-sm text-gray-300">
                {equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Difficulty
              </span>
              <span className="text-sm text-gray-300">
                {difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Sets
              </span>
              <span className="text-sm text-gray-300">
                {sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Reps
              </span>
              <span className="text-sm text-gray-300">
                {reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Duration
              </span>
              <span className="text-sm text-gray-300">
                {duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Calories
              </span>
              <span className="text-sm text-gray-300">
                {caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Rating
              </span>
              <span className="text-sm text-gray-300">
                {rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {instructions?.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-400"
                >
                  <span className="shrink-0 text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300">
              Add to today's plan
            </button>

            <button className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white">
              ♡ Save for later
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;