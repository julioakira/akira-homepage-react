import React, { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import MenuList from "./MenuList";
import ToggleButton from "./ToggleButton";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

type Handler = (event: Event) => void;

const items = ["About", "Works", "Other", "Contact"];

export default function Navbar() {
  const [open, toggleOpen] = useCycle(false, true);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const WrapperRef = useRef<HTMLDivElement>(null);

  const ClickOutside = (ref: typeof WrapperRef, handler: Handler): void => {
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

  useScrollPosition(({ currPos }) => {
    currPos.y < 0 ? setScrolled(true) : setScrolled(false);
  });

  ClickOutside(WrapperRef, () => (open ? toggleOpen() : null));

  // make it sticky and blur on scroll down
  // backdrop-blur-sm bg-peach/20
  return (
    <div
      className={`sticky top-0 flex flex-col bg-peach shadow-lg shadow-peach/50 dark:bg-medium-slate-blue dark:shadow-medium-slate-blue/50 ${
        scrolled
          ? "bg-peach/80 backdrop-blur-sm dark:bg-medium-slate-blue/80"
          : ""
      }`}
    >
      <div ref={WrapperRef}>
        <motion.nav
          animate={open ? "open" : "closed"}
          ref={navRef}
          initial={false}
        >
          <Sidebar
            className={`absolute left-0 top-12 bottom-0 h-screen w-48 bg-peach shadow-lg shadow-peach/50 dark:bg-medium-slate-blue ${
              scrolled
                ? "lg:bg-peach/80 backdrop-blur-sm lg:dark:bg-medium-slate-blue/80 md:bg-peach/80 md:dark:bg-medium-slate-blue/80"
                : ""
            }`}
          />
          <ToggleButton toggle={() => toggleOpen()} />
          {/* <Logo /> */}
          <MenuList menuItems={items} />
        </motion.nav>
        <ThemeSwitcher className="float-right mt-1 mb-1 mr-4" />
      </div>
    </div>
  );
}
