import React from "react";
import { motion } from "framer-motion";

const sidebar = {
  open: {
    clipPath: "circle(500px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 17% -20px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar({...props}: any) {
  return (
    <motion.div
      variants={sidebar}
      {...props}
    />
  );
}
