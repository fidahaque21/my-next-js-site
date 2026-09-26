"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // Add to Plan
  const addToPlan = (workout) => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info("Already added to your plan");
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);

    toast.success("Added to your plan");
  };

  // Save / Unsave workout
  const toggleSave = (workout) => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      setSaved((previousSaved) =>
        previousSaved.filter((item) => item.id !== workout.id)
      );

      toast.success("Removed from saved");
      return;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);

    toast.success("Saved for later");
  };
    // Remove from Today's Plan
  const removeFromPlan = (id) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== id)
    );

    toast.success("Removed from today's plan");
  };

  // Remove from Saved
  const removeFromSaved = (id) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== id)
    );

    toast.success("Removed from saved");
  };
// Mark workout as done
const markAsDone = (id) => {
  setPlan((previousPlan) =>
    previousPlan.filter((item) => item.id !== id)
  );

  toast.success("Congratulations! 🎉 Workout completed!");
};
  return (
    <PlanContext.Provider
      value={{
        plan,
        addToPlan,
        saved,
        toggleSave,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);