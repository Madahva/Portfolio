type props = {
  className?: string;
};

export const Divider = ({ className }: props) => {
  return (
    <div
      className={`absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#ffffff00] via-[#00A8FF80] to-[#ffffff00] left-1/2 transform -translate-x-1/2 ${className}`}
    ></div>
  );
};
