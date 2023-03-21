import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { DayIcon, NightIcon } from "../icons";

export default function ThemeSwitcher(
  props: any
): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    return () => setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-lg p-3  ${
        theme === "light" ? "bg-purple-400" : "bg-orange-400"
      } ${props.className}`}
      onClick={changeTheme}
    >
      {theme === "light" ? <NightIcon /> : <DayIcon />}
    </motion.button>
  );
}
