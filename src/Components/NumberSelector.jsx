import React from "react";

const NumberSelector = ({ selected, setSelected }) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:ml-[440px] ml-0">
      <div className="flex gap-2 sm:gap-4 md:gap-6 flex-wrap justify-center md:justify-start">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            onClick={() => setSelected(num)}
            className={`cursor-pointer h-10 w-10 sm:h-14 sm:w-14 md:h-[72px] md:w-[72px] border border-black flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold transition-colors
              ${
                selected === num
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {num}
          </div>
        ))}
      </div>
      <p className="mt-2 ml-0 md:ml-[-395px] text-base sm:text-lg md:text-2xl font-medium text-center">
        Select Number
      </p>
    </div>
  );
};

export default NumberSelector;
