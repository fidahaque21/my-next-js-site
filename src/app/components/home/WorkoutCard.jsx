
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

const WorkoutCard = ({ workout }) => {
  if (!workout) return null;

  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (

    <Link href={`/workouts/${id}`} className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-lg">

      {/* Image */}
      <div className="h-70 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className=" w-full "
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Group Badges */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {muscleGroups?.slice(0, 2).map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-[#b6ff00] px-2 py-0.5 text-[8px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="mb-1 text-sm font-bold uppercase tracking-wide text-white">
          {name}
        </h2>

        {/* Equipment */}
        <p className="mb-4 text-[10px] text-gray-500">
          {equipment}
        </p>

        {/* Divider */}
        <div className="mb-3 border-t border-gray-800"></div>

        {/* Workout Info */}
        <div className="flex items-center justify-between text-lg text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-1">
            <FaClock className="text-gray-500" />
            <span>{duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1">
            <FaFire className="text-gray-500" />
            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-gray-500" />
            <span>{rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;