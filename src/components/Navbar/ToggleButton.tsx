import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type PathProps = {
  theme: string | undefined;
  variants: any;
  d?: string;
  transition?: any;
};

export default function ToggleButton({ toggle }: { toggle: () => void }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    return () => setMounted(true);
  }, []);

  const Path = ({ theme, ...rest }: PathProps) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={theme === "dark" ? "#FFF" : "#2E2E2E"}
      strokeLinecap="round"
      {...rest}
    />
  );

  if (!mounted) return null;

  return (
    <div className="float-left mt-2 ml-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
      >
        <svg width="35" height="35" viewBox="0 0 25 25">
          <Path
            theme={theme}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            theme={theme}
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            theme={theme}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
