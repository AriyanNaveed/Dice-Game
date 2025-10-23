// ...existing code...
import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="ml-2 sm:ml-4 md:ml-12 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]">
      <h1 className="text-4xl sm:text-6xl md:text-[100px] font-bold md:h-30">
        {score}
      </h1>
      <div className="flex gap-2 mt-0">
        <p className="text-lg sm:text-2xl md:text-2xl font-medium">Total </p>
        <p className="text-lg sm:text-2xl md:text-2xl font-medium">Score</p>
      </div>
    </div>
  );
};

export default TotalScore;
// ...existing code...
