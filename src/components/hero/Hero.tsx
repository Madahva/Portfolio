import { cn } from "@/lib/utils";

import hero from "@/assets/hero.svg";
import { SocialLinks } from "@/components/hero/ContactLinks";

export const Hero = () => {
  return (
    <section
      className={cn(
        "flex flex-col justify-between items-center",
        "md:flex-row",
      )}
    >
      <div className="flex flex-col max-w-[600px] gap-8">
        <h1 className="text-4xl lg:text-5xl leading-11 max-w-[500px] lg:leading-15">
          Hello, I'm
          <span className="font-extrabold">
            {" "}
            Guillermo. <br /> Front-End Engineer
          </span>
        </h1>
        <div className="text-text-secondary text-base flex flex-col gap-4">
          <p>
            I build responsive, accessible web applications with exceptional
            performance metrics.
          </p>
          <p>
            My expertise lies in creating user experiences through clean
            architecture and modern development practices with technologies like
            Next.js, React, and TypeScript.
          </p>
        </div>
        <SocialLinks />
      </div>
      <img
        src={hero}
        alt="programmer image"
        className="max-w-[350px] lg:max-w-none lg:w-[550px]"
      />
    </section>
  );
};
