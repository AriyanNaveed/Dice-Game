import React from "react";

const Hero = ({ toggle }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <img
          src="dices 1.png"
          alt="dice-logo"
          className="w-64 h-52 sm:w-96 sm:h-80 md:w-[400px] md:h-[320px] lg:w-[649px] lg:h-[522px] py-6 px-4 sm:py-10 sm:px-10 lg:py-12 lg:px-12 mt-6 lg:mt-12 ml-0 lg:ml-12"
        />
        <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center lg:text-left">
            DICE GAME
          </h1>
          <div className="mt-4 lg:mt-2 ml-0 lg:ml-20 w-full flex justify-center lg:justify-start">
            <button
              onClick={toggle}
              className="cursor-pointer bg-black text-white h-10 w-40 sm:h-11 sm:w-56 font-semibold rounded hover:bg-gray-900 transition-colors"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
