"use client";

import { usePlan } from "./PlanContext";



const PlanCount = () => {
  const { plan } = usePlan();

  return (
    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b8f500] px-1 text-xs font-bold text-black">
      {plan.length}
    </span>
  );
};

export default PlanCount;