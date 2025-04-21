import { useState } from "react";

import { cn } from "@/lib/utils";
import close from "@/assets/close.svg";
import { HamburgerMenu } from "@/components/navbar/HamburgerMenu";
import { NAV_ITEMS } from "@/data/navItems";
import { Divider } from "@/components/navbar/Devider";
import { ResumeLink } from "@/components/navbar/ResumeLink";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <div className="py-6 justify-end items-center flex lg:hidden">
        <HamburgerMenu handleClick={toggleMenu} />
      </div>

      <Divider />

      {showMenu && (
        <ul
          className={cn(
            "fixed inset-y-0 inset-x-0 px-4 bg-black h-full py-6",
            "flex flex-col justify-between items-left",
            "font-extrabold text-lg",
            "lg:hidden",
          )}
        >
          <div className="flex flex-col gap-12">
            <button
              className="w-fit self-end cursor-pointer"
              onClick={toggleMenu}
            >
              <img src={close} alt="close" />
            </button>

            <Divider className="top-[78px]" />

            <div className="max-h-[500px]">
              {Object.entries(NAV_ITEMS).map(([key, value]) => (
                <li className="relative group py-4">
                  <a
                    href={`#${key}`}
                    onClick={toggleMenu}
                    className="block w-full"
                  >
                    {value}
                  </a>
                  <span
                    className={cn(
                      "bg-gradient-to-r from-cyan-500 to-blue-500",
                      "absolute left-0 bottom-0 w-full h-1 scale-x-0 origin-left",
                      "transition-transform duration-300 group-hover:scale-x-100",
                    )}
                  ></span>
                </li>
              ))}
            </div>
          </div>

          <ResumeLink />
        </ul>
      )}
    </>
  );
};
