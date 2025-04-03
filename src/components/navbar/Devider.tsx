type props = {
  className?: string;
};

export const Divider = ({ className }: props) => {
  return (
    <div
      className={`absolute w-full h-[1px] bg-gradient-to-r from-[#ffffff00] via-[#ffffff80] to-[#ffffff00] left-1/2 transform -translate-x-1/2 ${className}`}
    ></div>
  );
};
