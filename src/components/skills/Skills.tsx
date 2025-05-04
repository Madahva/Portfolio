import { cn } from "@/lib/utils";

import { SKILLS } from "@/data/techStack";

export const Skills = () => {
  return (
    <section className="md:py-48 container" id="skills">
      <div className="flex flex-col justify-center items-start mb-20 gap-4 lg:items-center">
        <h2 className="text-4xl">
          Tech <span className="font-extrabold">Stack</span>
        </h2>
        <p className="text">
          These are the tools and technologies I rely on to bring ideas to life
          and build great products.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {SKILLS.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-transparent w-42 h-16 rounded cursor-pointer border border-blue",
              "flex justify-center items-center gap-4 z-1",
              "transition-all duration-300 hover:border-cyan hover:bg-blue/10",
              "hover:shadow-[0_0_15px_rgba(0,184,219,0.5)] hover:scale-105",
              "hover:translate-y-[-5px]",
            )}
          >
            <img
              src={skill.icon}
              width={32}
              height={32}
              className="w-8"
              draggable="false"
              alt={skill.name}
            />
            <p key={index} className="text-white font-extrabold font-sora">
              {skill.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
