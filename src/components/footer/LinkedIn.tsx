import linkedInLogo from "@/assets/socials/linkedin.svg";

export const LinkedIn = () => {
  return (
    <div className="group relative">
      <a
        className="cursor-pointer transition-all duration-300"
        href="https://www.linkedin.com/in/guillermo-galarza/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedInLogo} className="w-6 h-6 fill-white" alt="linkedIn Logo" />
      </a>
      <span
        className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-cyan bg-dark-blue py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
      >
        LinkedIn<span></span>
      </span>
    </div>
  );
};
