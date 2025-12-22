import React, { useState } from "react";
import "./counter.css";

function counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h2 className="title">Counter Application</h2>

      <div className="display">Counter Display: {count}</div>

      <button className="btn" onClick={handleIncrease}>
        +
      </button>
      <button className="btn" onClick={handleDecrease}>
        -
      </button>
      <button className="btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}

export default counter;
