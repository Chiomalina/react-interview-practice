import React, { useRef } from "react";

function FormInput() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Focus Input</h2>

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Input Focus</button>
    </div>
  );
}

export default FormInput;
