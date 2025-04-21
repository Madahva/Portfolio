import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navItems";
import { ResumeLink } from "@/components/navbar/ResumeLink";
import { Divider } from "@/components/navbar/Devider";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  return (
    <nav className="container">
      <div className="py-8 justify-between items-center hidden lg:flex">
        <ul
          className={cn(
            "flex items-center gap-8",
            "font-extrabold text-lg",
          )}
        >
          {Object.entries(NAV_ITEMS).map(([key, value]) => (
            <li className="relative group" key={key}>
              <a href={`#${key}`}>{value}</a>
              <span
                className={cn(
                  "bg-gradient-to-r from-cyan-500 to-blue-500",
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
    </nav>
  );
};
