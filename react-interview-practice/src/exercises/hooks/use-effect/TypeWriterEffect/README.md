# ⌨️ TypeWriter Effect (React)

A simple **Typewriter Effect** component built with **React Hooks**.  
It progressively displays text letter by letter using `useEffect` and `setTimeout`, with proper cleanup to avoid memory leaks.

---

## 🚀 Features

- Letter-by-letter typing animation
- Customizable typing speed
- Safe timeout cleanup (no side-effects)
- Reusable and configurable component
- Beginner & interview friendly

---

## 🧠 Concepts Used

- `useState` for tracking the current character index
- `useEffect` for side effects
- `setTimeout` for delayed execution
- Cleanup functions to prevent stale timers

---

## 📦 Component Code

```jsx
import { useState, useEffect } from "react";

function TypeWriterEffect({ text = "Hello World!", speed = 800 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Stop when typing is complete
    if (index >= text.length) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    // Cleanup prevents memory leaks and timer collisions
    return () => window.clearTimeout(timeoutId);
  }, [text, index, speed]);

  return (
    <div>
      <span>{text.slice(0, index)}</span>
      <span style={{ marginLeft: 12 }}>|</span>
    </div>
  );
}

export default TypeWriterEffect;
```

## Usage Example

```
import TypeWriterEffect from "./components/TypeWriterEffect";

function App() {
  return (
    <div>
      <TypeWriterEffect text="Welcome to React!" speed={150} />
    </div>
  );
}

export default App;

```

## 🔍 How It Works

- index starts at 0
- useEffect schedules a setTimeout
- Each timeout increments index
- text.slice(0, index) reveals characters gradually
- Cleanup clears old timers on every re-render

#### This ensures:

- No overlapping timers
- Clean re-runs when dependencies change
- Predictable behavior
