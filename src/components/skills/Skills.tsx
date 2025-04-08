import { cn } from "@/lib/utils";

import typescript from "@/assets/skills/typescript.svg";
import javascript from "@/assets/skills/javascript.svg";
import react from "@/assets/skills/react.svg";
import nextjs from "@/assets/skills/next.svg";
import redux from "@/assets/skills/redux.svg";
import css from "@/assets/skills/css.svg";
import tailwind from "@/assets/skills/tailwind.svg";
import figma from "@/assets/skills/figma.svg";
import jest from "@/assets/skills/jest.svg";
import git from "@/assets/skills/git.svg";
import vite from "@/assets/skills/vite.svg";
import node from "@/assets/skills/node.svg";
import express from "@/assets/skills/express.svg";
import sequelize from "@/assets/skills/sequelize.svg";
import postgresql from "@/assets/skills/postgresql.svg";

const SKILLS = [
  {
    name: "TypeScript",
    icon: typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", icon: react, url: "https://react.dev/" },
  { name: "Next.js", icon: nextjs, url: "https://nextjs.org/" },
  { name: "Redux.js", icon: redux, url: "https://redux.js.org/" },
  {
    name: "CSS",
    icon: css,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "Tailwind CSS", icon: tailwind, url: "https://tailwindcss.com/" },
  { name: "Figma", icon: figma, url: "https://www.figma.com/" },
  { name: "Jest", icon: jest, url: "https://jestjs.io/" },
  { name: "Git", icon: git, url: "https://git-scm.com/" },
  { name: "Vite", icon: vite, url: "https://vitejs.dev/" },
  { name: "Node.js", icon: node, url: "https://nodejs.org/" },
  { name: "Express", icon: express, url: "https://expressjs.com/" },
  { name: "Sequelize", icon: sequelize, url: "https://sequelize.org/" },
  { name: "PostgreSQL", icon: postgresql, url: "https://www.postgresql.org/" },
];

export const Skills = () => {
  return (
    <section className="md:py-20" id="skills">
      <div className="flex flex-col justify-center items-start mb-20 gap-4 lg:items-center">
        <h2 className="text-4xl">
          Tech <span className="font-extrabold">Stack</span>
        </h2>
        <p className="text-text-secondary">
          A list of my favorite tools and technologies that I use on a regular
          basis.
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
              "bg-white p-4 w-40 h-40 rounded cursor-pointer",
              "flex flex-col justify-around items-center gap-4",
            )}
          >
            <img
              src={skill.icon}
              className="w-14"
              draggable="false"
              alt={skill.name}
            />
            <p key={index} className="text-black font-extrabold font-sora">
              {skill.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
