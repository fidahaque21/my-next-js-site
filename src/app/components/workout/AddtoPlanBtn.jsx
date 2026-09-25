"use client";

import { usePlan } from "@/app/context/PlanContext";



const AddToPlanButton = ({ workout }) => {
  const { addToPlan } = usePlan();

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
    >
      Add to today's plan
    </button>
  );
};

export default AddToPlanButton;