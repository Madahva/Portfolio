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
            "cursor-pointer border border-blue rounded py-2 px-4 font-bold flex-1",
            "transition duration-300",
            "hover:bg-gradient-to-r from-cyan to-blue"
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
