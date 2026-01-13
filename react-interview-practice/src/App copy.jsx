import React from "react";
import LiveCoding from "./exercises/LiveCoding/LiveCoding.jsx";
import TodoRemover from "./exercises/LiveCoding/TodoRemover/TodoRemover.jsx";

function App() {
  let countries = [
    "Nigeria",
    "Cameroun",
    "Ghana",
    "Ivory-Coast",
    "Bokina-Faso",
    "Nigel",
    "Mali",
  ];
  return (
    <main style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>React Interview Practice</h1>
      <p>Small focused exercises with short explanations</p>

      <hr />
      <br />
      <LiveCoding />

      <hr />
      <br />
      <TodoRemover />
    </main>
  );
}

export default App;
