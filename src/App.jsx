import React, { useState } from "react";
import Hero from "./Components/Hero";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div className="min-h-screen overflow-x-hidden animated-gradient">
      {isGameStarted ? <GamePlay /> : <Hero toggle={toggleGamePlay} />}
      <style>
        {`
          .animated-gradient {
            background: linear-gradient(-45deg, #ff5858, #ff9a44, #ff3e7f, #ffb347, #ff5858);
            background-size: 400% 400%;
            animation: gradientBG 10s ease infinite;
          }
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </div>
  );
}

export default App;
