import { cn } from "@/lib/utils";
import { useState } from "react";

import { HamburgerMenu } from "@/components/navbar/HamburgerMenu";
import { NAV_ITEMS } from "@/components/navbar/NAV_ITEMS";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="py-8 justify-between items-center hidden lg:flex">
        <ul
          className={cn(
            "flex justify-between items-center w-100",
            "font-extrabold text-lg",
          )}
        >
          {Object.entries(NAV_ITEMS).map(([key, value]) => (
            <li className="relative group">
              <a href={`#${key}`}>{value}</a>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="py-6 justify-end items-center flex lg:hidden">
        <HamburgerMenu handleClick={toggleMenu} />
      </nav>

      <div className="absolute w-full h-[1px] bg-gradient-to-r from-[#ffffff00] via-[#ffffff80] to-[#ffffff00] left-1/2 transform -translate-x-1/2"></div>

      <ul
        className={cn(
          "flex flex-col justify-between items-left py-12",
          "font-extrabold text-lg",
          "lg:hidden",
          showMenu ? "flex" : "hidden",
        )}
      >
        {Object.entries(NAV_ITEMS).map(([key, value]) => (
          <li className="relative group py-4">
            <a href={`#${key}`} onClick={toggleMenu} className="block w-full">
              {value}
            </a>
            <span className="absolute left-0 bottom-0 w-[80%] h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </>
  );
};
