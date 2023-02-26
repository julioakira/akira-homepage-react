import React, { useRef, useEffect, ReactElement, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AkiraImage from "../../public/images/akira-pill.png";
import ThemeSwitcher from "./ThemeSwitcher";
import { OpenNavIcon, CloseNavIcon } from "./icons";

export default function Navbar(): ReactElement<"nav"> {
  const [expandedNav, setExpandedNav] = useState(false);
  const WrapperRef = useRef<HTMLDivElement>(null);

  type Handler = (event: Event) => void;

  const ClickOutside = (ref: typeof WrapperRef, handler: Handler): any => {
    useEffect(() => {
      function eventListener(e: Event): void {
        if (!ref.current || ref.current.contains(e.target as HTMLDivElement))
          return;
        handler(e);
      }

      document.addEventListener("mousedown", eventListener);

      return () => {
        document.removeEventListener("mousedown", eventListener);
      };
    }, [ref, handler]);
  };

  ClickOutside(WrapperRef, () => setExpandedNav(false));

  return (
    <nav className="bg-peach px-2 dark:bg-medium-slate-blue">
      <div
        ref={WrapperRef}
        className={`${
          expandedNav
            ? "h-12"
            : "container mx-auto flex w-full flex-wrap items-center justify-between pt-2 pb-2 md:pt-0  lg:pt-0"
        }`}
      >
        <div className={`${expandedNav ? "hidden" : ""} lg:pl-4`}>
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
        <div className="md:hidden">
          <button
            onClick={() => setExpandedNav(!expandedNav)}
            type="button"
            data-collapse-toggle="nav-default"
          >
            {expandedNav ? null : <OpenNavIcon />}
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
        <div
          id="nav-default"
          className={`${
            expandedNav
              ? "absolute right-0 bg-peach px-2 dark:bg-medium-slate-blue"
              : "hidden"
          } md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:flex-row md:border-0 md:text-sm">
            <li className={`${expandedNav ? "" : "hidden"}`}>
              <Link className="md:border-0" href="/">
                <div className="flex items-center">
                  <Image
                    width={20}
                    height={20}
                    src={AkiraImage.src}
                    alt="Akira Logo"
                  />
                  <span className="self-center text-xl">Akira</span>
                </div>
              </Link>
            </li>
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
              <ThemeSwitcher className="block p-2.5 md:border-0" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
