import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section>
      <h2 className="title">Counter Application</h2>

      <div className="display" style={{ marginBottom: 12 }}>
        Counter Display: {count}
      </div>

      <div>
        <button
          style={{ marginRight: 12 }}
          className="btn"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          style={{ marginRight: 12 }}
          className="btn"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          style={{ marginRight: 12 }}
          className="btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
