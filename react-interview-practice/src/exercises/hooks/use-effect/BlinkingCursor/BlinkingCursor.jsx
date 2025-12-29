import { useEffect, useState } from "react";

export default function BlinkingCursor(props) {
  // Destructure props
  const { text = "Hello World", speed = 80 } = props;

  // Display State
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Cursor state
  const [showCursor, setShowCursor] = useState(true);

  const isDone = index >= text.length;
  const typed = text.slice(0, index);

  // 1) Typewriter effect (setTimeout and cleanup)
  useEffect(() => {
    if (!isRunning) return;
    if (isDone) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeoutId);
  }, [index, text, isRunning, speed]);

  // Restart typing when text changes
  useEffect(() => {
    setIndex(0);
  }, [text]);

  //2) Blinking cursor (setInterval + cleanup)
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => window.clearInterval(intervalId);
  }, []);

  function handleStart() {
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIndex(0);
    setIsRunning(true);
  }

  return (
    <div>
      <p>
        {typed}
        <span style={{ opacity: showCursor && !isDone ? 1 : 0 }}>|</span>
      </p>

      <div>
        <button
          style={{ backgroundColor: "green" }}
          onClick={handleStart}
          disabled={isRunning || isDone}
        >
          Start
        </button>

        <button
          style={{ backgroundColor: "red" }}
          onClick={handlePause}
          disabled={isDone}
        >
          Pause
        </button>

        <button style={{ backgroundColor: "grey" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
