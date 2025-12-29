import { useState, useEffect } from "react";

function BlinkingCursor({ text = "Hello Chioma", speed = 80 }) {
  const [index, setIndex] = useState(0);

  const isDone = index >= text.length;

  useEffect(() => {
    if (isDone) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    // cleanup timeout
    return () => window.clearTimeout(timeoutId);
  }, [text, speed, isDone, index]);

  return (
    <div>
      <span>{text.slice(0, index)}</span>
      <span>|</span>
    </div>
  );
}

export default BlinkingCursor;
