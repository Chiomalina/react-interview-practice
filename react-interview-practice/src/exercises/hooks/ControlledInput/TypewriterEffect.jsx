import { useState, useEffect } from "react";

function TypewriterEffect({ text = "Hello World", speed = 1000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Stop the operation when text finish typing
    if (index > text.length) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeoutId);
  }, [text, speed, index]);
  return (
    <div>
      <h1>Type Writter Effect Magic</h1>

      <div>
        <span>{text.slice(0, index)}</span>
        <span>|-|-|</span>
      </div>
    </div>
  );
}

export default TypewriterEffect;
