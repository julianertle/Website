import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // 1. Check if the user manually toggled it before
    const saved = localStorage.getItem("theme");

    if (saved !== null) {
      return saved === "dark";
    }

    // 2. If no saved choice, detect the browser's theme
    const isBrowserDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    console.log("Initial theme from browser is dark:", isBrowserDark);

    return isBrowserDark;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

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
