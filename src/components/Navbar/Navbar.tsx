import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuList from "./MenuList";
import ToggleButton from "./ToggleButton";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

type Handler = (event: Event) => void;

const items = ["About", "Works", "Other", "Contact"];

function useDimensions(ref: any) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}

export default function Navbar() {
  const [open, toggleOpen] = useCycle(false, true);
  const navRef = useRef(null);
  const { height } = useDimensions(navRef);

  const WrapperRef = useRef<HTMLDivElement>(null);

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

  ClickOutside(WrapperRef, () => open ? toggleOpen() : null);

  return (
    <motion.nav
      className="bg-peach dark:bg-medium-slate-blue w-full h-20"
      animate={open ? "open" : "closed"}
      ref={navRef}
      initial={false}
      custom={height}
    >
      <div ref={WrapperRef} className="mr-auto">
        <ToggleButton toggle={() => toggleOpen()} />
        <Sidebar 
          className='bg-purple-400 dark:bg-orange-400 top-0 left-0 bottom-0 w-60 absolute'
        />
        <MenuList menuItems={items} />
        <ThemeSwitcher className="float-right mt-3 mr-4" />
        <Logo className='flex items-center justify-center -mt-9'/>
      </div>
    </motion.nav>
  );
}
