const RollDice = ({ currentDice, onRoll }) => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    onRoll(randomNumber);
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <div onClick={rollDice}>
        <img
          src={`dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          className="cursor-pointer"
        />
      </div>

      <p className="text-2xl font-medium">Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;
