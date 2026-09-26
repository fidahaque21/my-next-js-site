"use client";
import { usePlan } from "./PlanContext";


const SaveCount = () => {
  const { saved } = usePlan();

  return (
    <span
    href="/my-plan"
      className="flex items-center gap-2 text-gray-300 transition hover:text-white"
    >
      <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-600 px-1 text-xs text-gray-400">
        {saved.length}
      </span>
    </span>
  );
};

export default SaveCount;