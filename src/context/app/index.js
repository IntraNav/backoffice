"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(!!pathname);

    console.log("is mounted", !!pathname);
  }, [pathname]);

  const contextValues = {
    // vars
    mounted,
    drawerOpen,

    // FNs
    setMounted,
    toggleDrawer,
    setDrawerOpen,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
