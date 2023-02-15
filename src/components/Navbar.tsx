import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import AkiraImage from "../../public/images/akira-pill.png";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuIcon } from "./icons";

export default function Navbar(): ReactElement<"nav"> {
  return (
    <nav className="bg-peach dark:bg-medium-slate-blue px-2 sm:h-16 md:h-16">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="lg:pl-4">
          <Link href="/">
            <div className="flex items-center justify-center gap-1 [&>img]:hover:rotate-12">
              <Image
                width={40}
                height={20}
                className="pl-4"
                src={AkiraImage.src}
                alt="Akira Logo"
              />
              <span className="self-center text-xl">Akira</span>
            </div>
          </Link>
        </div>
        <div className="ml-auto inline-flex flex-row items-center p-2 text-sm md:ml-auto md:hidden">
          <button type="button" data-collapse-toggle="nav-default">
            <span className="sr-only">Open Menu</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <div id="nav-default" className="hidden md:block md:w-auto">
          <ul className="flex flex-col p-4 md:flex-row md:border-0 md:text-sm">
            <li>
              <Link className="block py-2 pl-3 pr-8 md:border-0" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-8 md:border-0" href="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-8 md:border-0" href="/other">
                Other
              </Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-8 md:border-0" href="/other">
                Contact
              </Link>
            </li>
            <li>
              <ThemeSwitcher className='block p-2.5 md:border-0' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
