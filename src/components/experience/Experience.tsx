import { motion } from "motion/react";

import { opacityVariant } from "@/data/animations";
import { cn } from "@/lib/utils";
import { EXPERIENCE } from "@/data/experience";

export const Experience = () => {
  return (
    <section
      className={cn(
        "bg-black mt-20 py-32 relative",
        "flex flex-col justify-between gap-32 px-4",
        "md:px-8 lg:items-center",
      )}
      id="experience"
    >
      <h2 className="text-4xl">
        My <span className="font-extrabold">Experience</span>
      </h2>
      {EXPERIENCE.map((exp, index) => (
        <motion.div
          className={cn(
            "flex flex-col justify-between gap-4",
            "border border-blue rounded p-4 max-w-[1200px]",
            "lg:p-8",
          )}
          key={exp.name}
          variants={opacityVariant}
          initial="initial"
          whileInView="final"
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img
                src={exp.logo}
                alt={exp.name}
                width={24}
                height={24}
                className="h-6"
              />
              <h3 className="font-extrabold text-lg">
                {exp.title} at {exp.name}
              </h3>
            </div>

            <span className="text-xs lg:text-base">{exp.duration}</span>
          </div>

          <p className="text">{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
};
