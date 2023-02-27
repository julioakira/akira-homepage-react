import React from "react";
import Image from "next/image";

import AkiraImage from "../../../public/images/akira.jpg";

export default function MainFigure() {
  return (
    <figure className='bg-slate-100 w-full'>
      <div className="flex flex-col items-center">
        <Image
          className="rounded-full p-4"
          width={150}
          height={150}
          src={AkiraImage.src}
          alt="Akira Picture"
        />
        <figcaption>
          <h1 className="text-2xl">Julio Akira</h1>
          <h2 className="">Full Stack Web Developer Based in São Paulo</h2>
        </figcaption>
      </div>
    </figure>
  );
}
