import React from "react";
import Image from "next/image";

import AkiraImage from "../../../public/images/akira.jpg";

export default function MainFigure() {
  return (
    <figure className='bg-cornsilk dark:bg-bunker w-full'>
      <div className="flex lg:flex-row items-center justify-center flex-col">
        <Image
          className="rounded-full p-4"
          width={150}
          height={150}
          src={AkiraImage.src}
          alt="Akira Picture"
        />
        <figcaption className='flex flex-col lg:items-start items-center'>
          <span className="font-serif-medium lg:text-3xl text-xl">Julio Akira</span>
          <span className="font-sans lg:text-xl text-lg">Full-Stack Developer</span>
          <span className="font-sans text-md">NodeJS, MERN/PERN TypeScript/JavaScript</span>
        </figcaption>
      </div>
    </figure>
  );
}
