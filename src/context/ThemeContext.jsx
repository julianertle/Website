import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // 1. If user previously picked a side, use it
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // 2. Otherwise, follow the browser/OS system setting
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Toggle the Tailwind class
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // NOTE: Only call localStorage.setItem inside your "Toggle" function
    // to avoid locking the user into a specific mode forever on first visit.
  }, [isDark]);

  // OPTIONAL: Listen for live OS theme changes
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only auto-update if the user hasn't set a manual override in storage
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
