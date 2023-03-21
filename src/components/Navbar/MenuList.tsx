import React from "react";
import { motion } from "framer-motion";

import Item from "./Item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function MenuList({ menuItems }: { menuItems: string[] }) {
  return (
    <motion.ul
    className='absolute w-50 mt-12 z-40'
    variants={variants}>
      {menuItems.map((item, idx) => (
        <Item key={`menuitem-${idx}`} itemTitle={item} />
      ))}
    </motion.ul>
  );
}
