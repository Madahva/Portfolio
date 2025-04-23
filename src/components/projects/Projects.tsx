import { cn } from "@/lib/utils";

import wave from "@/assets/wave.svg";
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

        {PROJECTS.map((project, index) => (
          <div key={project.name}>
            <div
              className={cn(
                "p-4 bg-[#e8def81f] mb-20 rounded",
                "flex flex-col gap-8",
              )}
            >
              <img src={project.image} alt={project.name} />
              <h3 className="font-extrabold text-lg">{project.name}</h3>
              <p className="text">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((technology) => (
                  <span className="bg-white rounded py-0 p-4 text-black capitalize font-extrabold">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {index < PROJECTS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
};
