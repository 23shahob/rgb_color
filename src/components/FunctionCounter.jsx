import React, { useEffect, useState, useRef } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);
  const timerID = useRef(null);
  useEffect(() => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerID.current);
  }, []);

  const handleStop = () => {
    clearInterval(timerID.current);
  };

  return (
    <div>
      <h1>FunctionCounter: {count}</h1>
      <button onClick={handleStop} className="border bg-orange-300 p-3">
        stop
      </button>
    </div>
  );
};

export default FunctionCounter;
