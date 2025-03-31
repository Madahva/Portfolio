import { useRef } from "react";

type props = {
  handleClick: () => void;
};

export const HamburgerMenu = ({ handleClick }: props) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
      handleClick();
    }
  };

  return (
    <button onClick={handleButtonClick}>
      <label className="relative w-10 h-7.5 cursor-pointer flex flex-col justify-between">
        <input
          ref={checkboxRef}
          type="checkbox"
          id="burger"
          className="peer hidden"
          onChange={handleClick}
        />
        <span
          className="absolute w-full h-[1px] bg-white rounded transition-all duration-300 
        origin-left top-0 
        peer-checked:rotate-45 peer-checked:top-0"
        />
        <span className="absolute w-[90%] h-[1px] bg-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:w-0" />
        <span
          className="absolute w-full h-[1px] bg-white rounded transition-all duration-300 
        origin-left bottom-0 
        peer-checked:-rotate-45 peer-checked:top-full"
        />
      </label>
    </button>
  );
};
