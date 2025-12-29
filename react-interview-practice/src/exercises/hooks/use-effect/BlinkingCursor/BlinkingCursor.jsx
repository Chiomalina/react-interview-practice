import { useEffect, useState } from "react";

export default function BlinkingCursor({ text = "Hello world!", speed = 800 }) {
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Cursor state
  const [showCursor, setShowCursor] = useState(true);

  // 1) Typewriter effect (setTimeout + cleanup)
  useEffect(() => {
    if (!isRunning) return;
    if (index >= text.length) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeoutId);
  }, [index, text, speed, isRunning]);

  // Optional: restart typing when text changes
  useEffect(() => {
    setIndex(0);
  }, [text]);

  // 2) Blinking cursor (setInterval + cleanup)
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 5000);

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

  const typed = text.slice(0, index);
  const isDone = index >= text.length;

  return (
    <div style={{ fontFamily: "monospace" }}>
      <p>
        {typed}
        <span style={{ opacity: showCursor && !isDone ? 1 : 0 }}>|</span>
      </p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handleStart} disabled={isRunning || isDone}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
