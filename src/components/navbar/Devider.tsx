type props = {
  className?: string;
};

export const Divider = ({ className }: props) => {
  return (
    <div
      className={`absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue/50 to-transparent left-1/2 transform -translate-x-1/2 ${className}`}
    ></div>
  );
};
