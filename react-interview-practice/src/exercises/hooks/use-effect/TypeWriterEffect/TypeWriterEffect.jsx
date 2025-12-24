import { useState, useEffect } from "react";

function TypeWriterEffect({ text = "Hello World!", speed = 800 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Stop when we finish typing
    if (index >= text.length) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    // cleaup cancels the pending timeout
    return () => window.clearTimeout(timeoutId);
  }, [text, index, speed]);

  return (
    <div>
      <span>{text.slice(0, index)}</span>
      <span style={{ margeinLeft: 12 }}>|</span>
    </div>
  );
}

export default TypeWriterEffect;
