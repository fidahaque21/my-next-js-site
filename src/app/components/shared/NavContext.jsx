"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";


const NavContext = createContext(null);

// Custom Provider Component
export const NavProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <NavContext.Provider value={{ pathname }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};