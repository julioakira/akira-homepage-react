import React from "react";
import Image from "next/image";
import Link from "next/link";
import AkiraImage from "../../../public/images/akira-pill.png";

export default function Logo(props: any) {
  return (
    <div {...props}>
      <Link href="/">
        <div className="flex items-center justify-center gap-1 [&>img]:hover:rotate-12">
          <Image
            width={50}
            height={20}
            className="pl-4"
            src={AkiraImage.src}
            alt="Akira Logo"
          />
          <span className="self-center text-2xl">Akira</span>
        </div>
      </Link>
    </div>
  );
}
