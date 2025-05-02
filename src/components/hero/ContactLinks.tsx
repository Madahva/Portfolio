import { cn } from "@/lib/utils";

import { SOCIALS } from "@/data/socialLinks";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className={cn(
            "cursor-pointer border border-blue rounded py-2 px-4 font-bold flex-1 z-1",
            "shadow-xs shadow-cyan-500/50",
            "transition-all duration-300 hover:border-cyan hover:bg-blue/10",
            "hover:shadow-[0_0_15px_rgba(0,184,219,0.5)]",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};
