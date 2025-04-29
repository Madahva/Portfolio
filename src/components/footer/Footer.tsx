import { LinkedIn } from "@/components/footer/LinkedIn";
import { Github } from "@/components/footer/Github";
import { ScrollToTopButton } from "@/components/footer/GoToTopBtn";

export const Footer = () => {
  return (
    <div className="bg-black py-10 lg:mt-20">
      <div className="container flex justify-between items-end lg:items-center">
        <div className="flex gap-8 flex-col w-full">
          <p className="text text-xl leading-8 text-white">
            Big ideas start with a conversation —{" "}
            <span className="relative inline-block">
              <span
                className="absolute -inset-1 bg-gradient-to-r from-[#0029FF] to-[#00A8FF] opacity-50 blur-md rounded-md animate-glow"
                aria-hidden="true"
              ></span>
              <a
                href="https://www.linkedin.com/in/guillermo-galarza/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-extrabold z-10 lg:px-4"
              >
                Let's connect!
              </a>
            </span>
          </p>
          <div className="flex justify-between w-full">
            <div className="flex gap-4">
              <LinkedIn />
              <Github />
            </div>

            <div className=" lg:hidden">
              <ScrollToTopButton />
            </div>
          </div>
          <p className="text text-xs lg:text-base">
            Designed and developed by Guillermo © 2025
          </p>
        </div>
        <div className="hidden lg:block">
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
};
