import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { opacityVariant } from "@/data/animations";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";

import wave from "@/assets/projects/wave.svg";

import { Divider } from "@/components/navbar/Devider";

export const Projects = () => {
  return (
    <section className="relative">
      <img
        src={wave}
        className="w-full absolute top-0"
        alt="wave"
        draggable="false"
      />
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
            <motion.div
              className="relative shadow-xl shadow-purple/10"
              key={project.name}
              variants={opacityVariant}
              initial="initial"
              whileInView="final"
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "py-8 px-4 bg-white/10 rounded",
                  "flex flex-col gap-8 group",
                  "xl:flex-row lg:p-8",
                  index % 2 !== 0 && "xl:flex-row-reverse",
                )}
              >
                <Link
                  to={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="z-10"
                >
                  <img
                    className="rounded w-full"
                    src={project.image}
                    alt={project.name}
                    draggable="false"
                    loading="lazy"
                    width={350}
                    height={160}
                  />
                </Link>
                <div className="flex flex-col gap-8 justify-between max-w-[700px]">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-extrabold text-2xl">{project.name}</h3>
                    <p className="text">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="bg-dark-blue border border-cyan rounded py-2 p-4 text-white capitalize font-bold text-xs font-sora"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-cyan to-blue cursor-pointer rounded p-0.5">
                    <Link
                      to={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={cn(
                        "flex items-center justify-center gap-2 group",
                        "py-2 px-4 font-extrabold text-base",
                        "bg-black text-white rounded",
                        "transition-all duration-300",
                        "hover:shadow-[0_0_15px_rgba(0,184,219,1)]",
                        "group-hover:shadow-[0_0_15px_rgba(0,184,219,1)]",
                      )}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>

              {index < PROJECTS.length - 1 && (
                <Divider className="bottom-[-8rem]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
