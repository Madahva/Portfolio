import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

import { opacityVariant } from "@/data/animations";
import { jumpVerticalVariant } from "@/data/animations";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

import arrow from "@/assets/leftArrow.svg";
import calendar from "@/assets/calendar.svg";
import linkLogo from "@/assets/link.svg";

import { Footer } from "@/components/footer/Footer";
import { Divider } from "@/components/navbar/Devider";
import { ScrollToTopButton } from "@/components/GoToTopBtn";

export const Details = () => {
  window.scrollTo({ top: 0, behavior: "instant" });

  const { slug } = useParams();

  const project = PROJECTS.find(
    (proj) => proj.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!project) {
    return <p className="p-8 text-center text-xl">Project not found.</p>;
  }

  return (
    <>
      <motion.main
        variants={opacityVariant}
        initial="initial"
        animate="final"
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-start items-center p-4 pb-20 lg:pt-20"
      >
        <nav
          className={cn(
            "sticky top-0 left-0 w-full max-w-[1000px]",
            "bg-black/10 backdrop-blur-sm z-20",
          )}
        >
          <div className="relative w-full pt-5 pb-5">
            <Link to="/" className="flex gap-4 text-left w-fit group relative">
              <img src={arrow} alt="go back" />
              Back to Portfolio
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan to-blue",
                  "origin-left transform scale-x-0 group-hover:scale-x-100",
                  "transition-transform duration-300 ease-out",
                )}
              />
            </Link>
          </div>
        </nav>
        <section className="w-full max-w-[1000px] flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl">{project.name}</h1>

            <div className="flex gap-4 justify-between lg:justify-start">
              <div className="flex gap-2 justify-left items-center">
                <img src={calendar} alt="calendar" width={16} height={16} />
                <p className="text-sm">{project.duration}</p>
              </div>

              <div
                className={cn(
                  "flex gap-2 rounded-full py-[2px] px-[12px] border",
                  project.status === "Live" && "border-blue-700",
                  project.status === "Closed" && "border-purple-700",
                )}
              >
                <div className="flex justify-center items-center">
                  <div className="relative inline-flex">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        project.status === "Live" && "bg-blue-500",
                        project.status === "Closed" && "bg-purple-500",
                      )}
                    ></div>
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full absolute top-0 left-0 animate-ping",
                        project.status === "Live" && "bg-blue-500",
                        project.status === "Closed" && "bg-purple-500",
                      )}
                    ></div>
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full absolute top-0 left-0 animate-pulse",
                        project.status === "Live" && "bg-blue-400",
                        project.status === "Closed" && "bg-purple-400",
                      )}
                    ></div>
                  </div>
                </div>
                <p
                  className={cn(
                    "text-sm",
                    project.status === "Live" && "text-blue-400",
                    project.status === "Closed" && "text-purple-400",
                  )}
                >
                  {project.status}
                </p>
              </div>

              {project.url && (
                <motion.a
                  className="italic text-blue-500 underline flex items-center"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={linkLogo} alt="link" width={24} height={24} />
                  {project.url}
                </motion.a>
              )}
            </div>
          </div>

          <img
            className="rounded z-10 shadow-xl shadow-purple/10"
            src={project.image}
            alt={project.name}
            draggable="false"
            loading="lazy"
            width={550}
            height={321}
          />

          <div className="flex flex-col gap-8">
            <h3 className="text-4xl">
              Project <span className="font-extrabold">Description</span>
            </h3>
            <p className="text">{project.description2}</p>
            <p className="text">{project.description}</p>
          </div>

          <div className="relative">
            <Divider />
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-4xl">
              Key <span className="font-extrabold">Responsibilities</span>
            </h3>
            <ul className="flex flex-col gap-4">
              {project.responsibilities.map((responsibility, index) => (
                <li className="text" key={index}>
                  • {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Divider />
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-4xl">
              Core <span className="font-extrabold">Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((technology, index) => (
                <motion.span
                  key={index}
                  className="bg-dark-blue border border-cyan rounded py-2 p-4 text-white capitalize font-bold text-xs font-sora"
                  variants={jumpVerticalVariant}
                  initial="initial"
                  whileInView="final"
                  transition={{
                    duration: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3,
                  }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      </motion.main>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};
