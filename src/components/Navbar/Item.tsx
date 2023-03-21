import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AkiraImage from "../../../public/images/akira-pill.png";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Item({ itemTitle }: { itemTitle: string }) {
  return (
    <motion.li
      className="flex items-center mb-5 h-16 p-5"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className='flex w-10'>
        <Image
          width={20}
          height={20}
          src={AkiraImage.src}
          alt="Akira Logo Menu"
        />
      </div>
      <div>
        <Link className="flex w-16" href={`/${itemTitle.toLocaleLowerCase()}`}>
          {itemTitle}
        </Link>
      </div>
    </motion.li>
  );
}
