import React from "react";
import ControlledLivePreview from "./exercises/forms/controlled-live-preview/controlledLivePreview";
import UncontrolledLoginUseRef from "./exercises/forms/uncontrolled-login-useref/UncontrolledLoginUseRef";
import Counter from "./exercises/hooks/counter-usestate/Counter";

function App() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>React Interview Practice</h1>
      <p>Small focused exercises with short explanations</p>

      <hr />
      <ControlledLivePreview />

      <hr />
      <UncontrolledLoginUseRef />

      <hr />
      <Counter />
    </main>
  );
}

export default App;
