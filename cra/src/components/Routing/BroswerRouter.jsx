import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const RouterContext = createContext(null);

export default function BroswerRouter({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
