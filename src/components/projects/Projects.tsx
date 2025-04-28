import { cn } from "@/lib/utils";

import wave from "@/assets/wave.svg";
import viewMore from "@/assets/projects/viewMore.svg";

import { Divider } from "@/components/navbar/Devider";
import { PROJECTS } from "@/data/projects";

export const Projects = () => {
  return (
    <section className="relative">
      <img src={wave} className="w-full absolute top-0" alt="wave" />
      <div
        className={cn(
          "container py-32",
          "flex flex-col justify-between gap-32 px-4",
          "md:px-8 lg:items-center",
        )}
        id="projects"
      >
        <h2 className="text-4xl">
          My <span className="font-extrabold">Projects</span>
        </h2>

        <div className="flex flex-col gap-[16rem]">
          {PROJECTS.map((project, index) => (
            <div className="relative" key={project.name}>
              <div
                className={cn(
                  "py-8 px-4 bg-white/10 rounded",
                  "flex flex-col gap-8",
                  "xl:flex-row lg:p-8",
                  index % 2 !== 0 && "xl:flex-row-reverse",
                )}
              >
                <img
                  className="rounded w-full"
                  src={project.image}
                  alt={project.name}
                />
                <div className="flex flex-col gap-8 justify-between max-w-[700px]">
                  <div className="flex flex-col gap-8">
                    <h3 className="font-extrabold text-2xl">{project.name}</h3>
                    <p className="text">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((technology) => (
                      <span className="bg-[#000654] border border-[#00A8FF] rounded py-2 p-4 text-white capitalize font-bold text-xs font-sora">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded p-0.5">
                    <a
                      className={cn(
                        "flex items-center justify-center gap-2",
                        "py-2 px-4 font-extrabold text-base",
                        "bg-black text-white rounded",
                        "transition-colors duration-300",
                        "hover:bg-transparent",
                      )}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View More
                      <img
                        src={viewMore}
                        className="w-5 h-5"
                        alt="download icon"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {index < PROJECTS.length - 1 && (
                <Divider className="bottom-[-8rem]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
