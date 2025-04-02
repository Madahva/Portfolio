import { cn } from "@/lib/utils";

const SOCIALS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/guillermo-galarza/",
  },
  {
    name: "GitHub",
    link: "https://github.com/Madahva",
  },
  {
    name: "Gmail",
    link: "mailto:galarzaguillermo.ggm@gmail.com",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className={cn(
            "cursor-pointer border rounded py-2 px-4 font-bold",
            "transition duration-300",
            "hover:bg-white hover:text-black",
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
