import React, { useState } from "react";
import Button from "./Button/Button";

const DarkModeToggler: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove the "dark" class on the root element
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  return (
    <Button
      type="submit"
      label={` ${darkMode ? "Light Mode" : "Dark Mode"}`}
      onclick={toggleDarkMode}
      btnClass="w-[110px] h-[39px] text-sm rounded border bg-black text-white dark:bg-white dark:text-black"
    />
  );
};

export default DarkModeToggler;
