'use client';
import { MdSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <MdSunny className="w-5 h-5 text-amber-500 transition-transform hover:rotate-12" />
      ) : (
        <IoMoonOutline className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;