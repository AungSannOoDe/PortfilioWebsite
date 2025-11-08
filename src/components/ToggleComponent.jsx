"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <button className="w-24 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </button>
    );
  }

  return (
    <button
      className="p-2 hover:bg-stone-100 rounded-full transition-all duration-300 transform hover:scale-110"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <>
             <Moon size={20} className='transition-transform duration-300 hover:rotate-12 hover:text-stone-700' />
        </>
      ) : (
        <>
         <Sun size={20} className='transition-transform duration-300 hover:rotate-12 text-stone-700 hover:text-stone-700'/>
        </>
      )}
    </button>
  );
};

export default ToggleComponent;