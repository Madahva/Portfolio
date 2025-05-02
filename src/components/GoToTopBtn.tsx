import { useEffect, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

import goToTopBtn from "@/assets/footer/goToTop.svg";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = useCallback(() => {
    if (!window.requestAnimationFrame) {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      return;
    }

    window.requestAnimationFrame(() => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-cyan to-blue",
        "cursor-pointer rounded p-0.5",
        "fixed bottom-4 right-4 lg:bottom-8 lg:right-8",
        "transition-all duration-300",
        showButton ? "opacity-100" : "opacity-0 pointer-events-none",
        "hover:shadow-[0_0_115px_rgba(0,184,219,1)] hover:scale-105",
        "hover:translate-y-[-5px]",
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center py-4 px-2",
          "bg-black rounded",
        )}
        onClick={goToTop}
        aria-label="Scroll to top of page"
      >
        <img
          src={goToTopBtn}
          className="h-6 lg:h-10 cursor-pointer"
          alt="Go to top of the page"
        />
      </span>
    </div>
  );
};
