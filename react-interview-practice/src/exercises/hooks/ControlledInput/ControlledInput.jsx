import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  function handleChange(event) {
    event.preventDefault;
    setText(event.target.value);
  }

  function handleReset() {
    setText("");
  }

  return (
    <div>
      <h1>Controlled Input Live Update</h1>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Make a wish"
      />

      <p>Your wish is: {text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ControlledInput;
