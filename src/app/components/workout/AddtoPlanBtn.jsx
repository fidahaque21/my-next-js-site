"use client";
import { usePlan } from "@/app/context/PlanContext";
const AddToPlanButton = ({ workout }) => {
  const { plan, addToPlan } = usePlan();
  const alreadyAdded = plan.some((item) => item.id === workout.id);
  const handleAddToPlan = () => {
    if (alreadyAdded) return;
    addToPlan(workout);
  };
  return (
    <button onClick={handleAddToPlan}
      disabled={alreadyAdded}
      className={`rounded-lg px-5 py-3 text-sm font-semibold transition ${alreadyAdded
          ? "cursor-not-allowed bg-gray-700 text-gray-400"
          : "cursor-pointer bg-lime-400 text-black hover:bg-lime-300"
        }`} > {alreadyAdded ? "Added to today's plan" : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;