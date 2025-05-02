import { cn } from "@/lib/utils";
import downloadIcon from "@/assets/download.svg";
import resume from "@/assets/resume.pdf";

export const ResumeLink = () => {
  return (
    <div className="bg-gradient-to-r from-cyan to-blue cursor-pointer rounded p-0.5">
      <a
        className={cn(
          "flex items-center justify-center gap-2",
          "py-2 px-4 font-extrabold text-base",
          "bg-black text-white rounded",
          "transition-all duration-300",
          "hover:shadow-[0_0_115px_rgba(0,184,219,1)]",
        )}
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={downloadIcon} className="w-5 h-5" alt="download icon" />
        Resume (CV)
      </a>
    </div>
  );
};
