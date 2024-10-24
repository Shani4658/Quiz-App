import { useEffect, useState } from "react";

const Odometer = ({ score, total }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = score / 100; // Small increment to animate smoothly

    const odometerInterval = setInterval(() => {
      if (start < score) {
        setDisplayScore(Math.min(score, Math.floor(start)));
        start += increment;
      } else {
        clearInterval(odometerInterval);
      }
    }, 20); // Speed of the odometer

    return () => clearInterval(odometerInterval);
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      {/* Odometer style */}
      <div className="flex justify-center items-center text-4xl font-bold mb-4">
        <span className="odometer-text">{displayScore}</span>
        <span className="odometer-total">/{total}</span>
      </div>

      {/* Progress bar as a background to support the odometer */}
      <div className="w-full h-6 bg-gray-200 rounded-full mb-4 relative">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${(score / total) * 100}%` }}
        ></div>
      </div>

      <span className="text-lg font-semibold">
        {Math.round((score / total) * 100)}%
      </span>
    </div>
  );
};

export default Odometer;
