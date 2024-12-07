'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Utility function to manage the dark mode class
const updateDarkModeClass = (isDark) => {
  document.documentElement.classList.toggle('dark', isDark);
};

// Create ThemeContext
const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Start with `null` to delay rendering until theme is determined
  const [isReady, setIsReady] = useState(false); // Track when theme is ready

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const initialTheme = storedTheme || systemTheme;

      setTheme(initialTheme);
      updateDarkModeClass(initialTheme === 'dark');
      setIsReady(true); // Theme is ready, enable rendering
    }
  }, []);

  useEffect(() => {
    if (theme !== null) {
      updateDarkModeClass(theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  if (!isReady) {
    return null; // Prevent rendering until theme is ready
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for using ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
