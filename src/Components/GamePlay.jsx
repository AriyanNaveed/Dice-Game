import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [warning, setWarning] = useState("");
  const [showRules, setShowRules] = useState(false);

  const handleRoll = (newDice) => {
    if (!selected) {
      setWarning("Please select a number before rolling the dice!");
      return;
    }
    setWarning(""); // Clear warning if number is selected
    setCurrentDice(newDice);
    if (selected === newDice) {
      setScore((prev) => prev + newDice);
    } else {
      setScore((prev) => Math.max(0, prev - 2)); // Prevent negative score
    }
  };

  const handleReset = () => setScore(0);

  return (
    <main className="w-full px-2 sm:px-4 md:px-8">
      <div className="flex flex-col  md:flex-row items-center md:items-end justify-center md:justify-around gap-8 md:gap-0 mt-4 md:mt-0">
        <TotalScore score={score} />
        <NumberSelector selected={selected} setSelected={setSelected} />
      </div>
      <RollDice currentDice={currentDice} onRoll={handleRoll} />
      {warning && (
        <div className="flex justify-center mt-4">
          <p className="text-red-600 font-semibold">{warning}</p>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleReset}
          className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition-colors"
        >
          Reset Score
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowRules(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition-colors"
        >
          Show Rules
        </button>
      </div>

      {/* Animated Modal Popup */}
      {showRules && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 scale-95 opacity-0 animate-popup w-11/12 max-w-md">
            <h1 className="text-2xl font-bold mb-2 text-center">
              How to play dice game
            </h1>
            <p className="text-lg mb-1">Select any number</p>
            <p className="text-lg mb-1">Click on dice image</p>
            <p className="text-lg mb-1">
              After click on dice, if selected number is equal to dice number
              you will get same point as dice
            </p>
            <p className="text-lg mb-4">
              If you get wrong guess then 2 point will be deducted
            </p>
            <button
              onClick={() => setShowRules(false)}
              className="block mx-auto bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes popup {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-popup {
            animation: popup 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}
      </style>
    </main>
  );
};

export default GamePlay;
