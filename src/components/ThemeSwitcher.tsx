import React, { ReactElement, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { DayIcon, NightIcon } from './icons';

export default function ThemeSwitcher(): ReactElement<'button'> | null {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    return () => setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null;
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-3 rounded-lg  ${(theme === 'light' ? 'bg-purple-400' : 'bg-orange-400')}`}
      onClick={changeTheme}
    >
      {theme === 'light' ? <NightIcon /> : <DayIcon />}
    </motion.button>
  )
}
