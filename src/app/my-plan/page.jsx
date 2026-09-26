"use client";

import Link from "next/link";
import { usePlan } from "../context/PlanContext";
import { useState } from "react";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");
  const currentList = [...(activeTab === "plan" ? plan : saved)].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return Number(b.duration) - Number(a.duration);
      }

      if (sortBy === "calories") {
        return Number(b.caloriesBurned) - Number(a.caloriesBurned);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return 0;
    }
  );

  // Calculate total minutes
  const totalMinutes = currentList.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  // Calculate total calories
  const totalCalories = currentList.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <h1 className="text-3xl font-extrabold uppercase">
          My Plan
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 rounded-2xl border border-gray-800 bg-[#15171c]">

          {/* Exercises */}
          <div className="border-r border-gray-800 px-6 py-7">
            <p className="text-sm text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-4xl font-extrabold text-lime-400">
              {currentList.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-r border-gray-800 px-6 py-7">
            <p className="text-sm text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-4xl font-extrabold">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-6 py-7">
            <p className="text-sm text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-4xl font-extrabold">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-7 flex items-center justify-between">
          <div className="flex rounded-xl border border-gray-800 bg-[#15171c] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "plan"
                ? "bg-[#242832] text-white"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "saved"
                ? "bg-[#242832] text-white"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-800 bg-[#15171c] px-4 py-2 text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State / Workout List */}
        {currentList.length === 0 ? (
          <div className="mt-6 flex min-h-[275px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 text-center">

            <h2 className="text-xl font-extrabold uppercase">
              {activeTab === "plan"
                ? "Nothing Here Yet"
                : "No Saved Workouts"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Save a workout for later and it will appear here."}
            </p>

            <Link
              href="/"
              className="mt-5 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-lime-400/20 transition hover:bg-lime-300"
            >
              Go to workouts
            </Link>

          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {currentList.map((workout) => (
              <div
                key={workout.id}
                className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#15171c] p-4"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-20 w-32 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-base font-bold uppercase">
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {workout.equipment}
                    </p>

                    <div className="mt-2 flex gap-4 text-xs text-gray-400">
                      <span>
                        ◷ {workout.duration} min
                      </span>

                      <span>
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300 transition hover:border-gray-500"
                  >
                    View Details
                  </Link>
                  {activeTab === "plan" && (
                    <button
                      onClick={() => markAsDone(workout.id)}
                      className="rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                    >
                      ✓ Mark as Done
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(workout.id);
                      } else {
                        removeFromSaved(workout.id);
                      }
                    }}
                    className="px-2 text-xl text-gray-600 hover:text-white"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;