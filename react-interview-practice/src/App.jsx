import React from "react";
import ControlledLivePreview from "./exercises/forms/controlled-live-preview/controlledLivePreview";
import UncontrolledLoginUseRef from "./exercises/forms/uncontrolled-login-useref/UncontrolledLoginUseRef";
import Counter from "./exercises/hooks/counter-usestate/Counter";
import FocusInput from "./exercises/hooks/use-ref-basics/FocusInput";
import RenderCounter from "./exercises/hooks/use-ref-basics/RenderCounter";
import UsersOnMount from "./exercises/hooks/use-effect/UseEffectFetchOnMount/UseEffectFetchOnMount";
import UseEffectSearchUsersDebounced from "./exercises/hooks/use-effect/UseEffectSearchUsersDebounced/UseEffectSearchUsersDebounced";
import TypeWriterEffect from "./exercises/hooks/use-effect/TypeWriterEffect/TypeWriterEffect";
import ListGroup from "./exercises/list-group/ListGroup.tsx";
import BlinkingCursor from "./exercises/hooks/use-effect/BlinkingCursor/BlinkingCursor.jsx";
import LiveCoding from "./exercises/LiveCoding/LiveCoding.jsx";
import Variable from "./exercises/variable.jsx";

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
      <ControlledLivePreview />

      <hr />
      <UncontrolledLoginUseRef />

      <hr />
      <Counter />

      <hr />
      <FocusInput />

      <hr />
      <RenderCounter />

      <hr />
      <Counter />

      <hr />
      <UsersOnMount />

      <hr />
      <UseEffectSearchUsersDebounced />

      <hr />
      <TypeWriterEffect />

      <hr />
      <ListGroup countries={countries} heading={"Cities"} />

      <hr />
      <BlinkingCursor />

      <hr />
      <Variable />
    </main>
  );
}

export default App;
