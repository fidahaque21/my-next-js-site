"use client";

import Link from "next/link";
import { usePlan } from "../context/PlanContext";
import { useState } from "react";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    usePlan();

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
    <main className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white sm:px-6 sm:py-8 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <h1 className="text-2xl font-extrabold uppercase sm:text-3xl">
          My Plan
        </h1>

        <p className="mt-1 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] sm:grid-cols-3">
          
          {/* Exercises */}
          <div className="border-b border-gray-800 px-5 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-7">
            <p className="text-sm text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-3xl font-extrabold text-lime-400 sm:text-4xl">
              {currentList.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-gray-800 px-5 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-7">
            <p className="text-sm text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-3xl font-extrabold sm:text-4xl">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-5 py-5 sm:px-6 sm:py-7">
            <p className="text-sm text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-3xl font-extrabold sm:text-4xl">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="flex w-full rounded-xl border border-gray-800 bg-[#15171c] p-1 sm:w-fit">
            <button
              onClick={() => setActiveTab("plan")}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                activeTab === "plan"
                  ? "bg-[#242832] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                activeTab === "saved"
                  ? "bg-[#242832] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex w-full items-center justify-between gap-2 text-sm text-gray-500 sm:w-auto sm:justify-normal">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-800 bg-[#15171c] px-3 py-2 text-sm text-white outline-none sm:px-4"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State / Workout List */}
        {currentList.length === 0 ? (
          <div className="mt-6 flex min-h-[275px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 px-5 text-center">
            
            <h2 className="text-lg font-extrabold uppercase sm:text-xl">
              {activeTab === "plan"
                ? "Nothing Here Yet"
                : "No Saved Workouts"}
            </h2>

            <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
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
                className="rounded-2xl border border-gray-800 bg-[#15171c] p-4"
              >

                {/* Workout Content */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  {/* Left */}
                  <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">

                    {/* Image */}
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-20 w-24 shrink-0 rounded-xl object-cover sm:h-20 sm:w-32"
                    />

                    {/* Workout Info */}
                    <div className="min-w-0">
                      <h2 className="truncate text-sm font-bold uppercase sm:text-base">
                        {workout.name}
                      </h2>

                      <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                        {workout.equipment}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-400 sm:gap-4 sm:text-xs">
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

                  {/* Right / Buttons */}
                  <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="flex items-center justify-center rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 sm:px-5 sm:text-sm"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        onClick={() => markAsDone(workout.id)}
                        className="flex items-center justify-center rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black transition hover:bg-lime-300 sm:px-5 sm:text-sm"
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
                      className="flex h-9 items-center justify-center rounded-full border border-gray-800 px-4 text-sm text-gray-600 transition hover:border-gray-700 hover:text-white sm:border-0 sm:px-2 sm:text-xl"
                      aria-label="Remove workout"
                    >
                      ✖
                    </button>

                  </div>
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
