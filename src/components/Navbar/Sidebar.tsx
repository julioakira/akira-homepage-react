import React from "react";
import { motion } from "framer-motion";

const sidebar = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar(props: any) {
  return <motion.div {...props} variants={sidebar} />;
}
