import React, { useState } from "react";

function controlledLivePreview() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Controlled Live Preview</h2>

      <label htmlFor="message">Message</label>
      <input
        id="message"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type your wish"
      />

      <p>
        <strong>Live preview:</strong> {text}
      </p>
    </div>
  );
}

export default controlledLivePreview;
