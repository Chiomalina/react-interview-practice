import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus;
  }

  return (
    <section>
      <h2>Focus Input (useRef)</h2>

      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </section>
  );
}

export default FocusInput;
