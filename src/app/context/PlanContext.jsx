"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);

  const addToPlan = (workout) => {
    setPlan((previousPlan) => [...previousPlan, workout]);
  };

  return (
    <PlanContext.Provider value={{ plan, addToPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  return useContext(PlanContext);
};