import React, { useState } from "react";

function livePreview() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Live Preview Display</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type your Christmas wish here...."
      />

      <div>Santa will deliver to you: {text}</div>
    </div>
  );
}

export default livePreview;
