import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { jumpVerticalVariant } from "@/data/animations";
import { NAV_ITEMS } from "@/data/navItems";

import { ResumeLink } from "@/components/navbar/ResumeLink";
import { Divider } from "@/components/navbar/Devider";
import { MobileMenu } from "@/components/navbar/MobileMenu";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    NAV_ITEMS.forEach((item) => {
      if (item.href.startsWith("#")) {
        const sectionId = item.href.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 w-full bg-black",
        "lg:bg-black/10 lg:backdrop-blur-sm z-10",
      )}
    >
      <div className="container relative flex flex-col">
        <div className="py-8 justify-between items-center hidden lg:flex">
          <ul
            className={cn("flex items-center gap-8", "font-extrabold text-lg")}
          >
            {NAV_ITEMS.map((link, index) => {
              const sectionId = link.href.startsWith("#")
                ? link.href.slice(1)
                : link.href;
              const isActive = sectionId === activeSection;

              return (
                <motion.li
                  className="relative group"
                  key={link.name}
                  variants={jumpVerticalVariant}
                  initial="initial"
                  animate="final"
                  transition={{
                    duration: 0.2 + index * 0.1,
                    type: "spring",
                    delay: 0.3,
                  }}
                >
                  <a
                    href={`${link.href}`}
                    target={link.target}
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  <span
                    className={cn(
                      "bg-gradient-to-r from-cyan to-blue",
                      "absolute left-0 bottom-0 w-full h-0.5 origin-left",
                      "transition-transform duration-300",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  ></span>
                </motion.li>
              );
            })}
          </ul>
          <ResumeLink />
        </div>
        <Divider />
        <MobileMenu />
      </div>
    </nav>
  );
};
