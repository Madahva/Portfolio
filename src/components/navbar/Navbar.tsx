import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navItems";

import { ResumeLink } from "@/components/navbar/ResumeLink";
import { Divider } from "@/components/navbar/Devider";
import { MobileMenu } from "@/components/navbar/MobileMenu";

export const Navbar = () => {
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
            {NAV_ITEMS.map((link) => (
              <li className="relative group" key={link.name}>
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
                    "absolute left-0 bottom-0 w-full h-0.5 scale-x-0 origin-left",
                    "transition-transform duration-300",
                    "group-hover:scale-x-100",
                  )}
                ></span>
              </li>
            ))}
          </ul>

          <ResumeLink />
        </div>

        <Divider />

        <MobileMenu />
      </div>
    </nav>
  );
};
