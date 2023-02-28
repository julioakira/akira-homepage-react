import React from "react";
import Image from "next/image";

import AkiraImage from "../../../public/images/akira.jpg";

export default function MainFigure() {
  return (
    <figure className='bg-yellow-300 w-full'>
      <div className="flex flex-col items-center">
        <Image
          className="rounded-full p-4"
          width={200}
          height={200}
          src={AkiraImage.src}
          alt="Akira Picture"
        />
        <figcaption className='flex flex-col items-center'>
          <span className="text-xl">Julio Akira</span>
          <span className="text-md">Full Stack Web Developer</span>
        </figcaption>
      </div>
    </figure>
  );
}
