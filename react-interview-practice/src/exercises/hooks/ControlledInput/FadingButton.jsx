import { useState } from "react";

function FadingButton() {
  const [opacity, setOpacity] = useState(1);

  const STEP = 0.15;

  function handleClick() {
    setOpacity((prev) => {
      const next = prev - STEP;

      if (next <= 0.05) return 1;
      return Number(next.toFixed(2));
    });
    return (
      <div>
        <h1>Fading Button</h1>
        <button
          onClick={handleClick}
          style={{
            opacity,
            transition: "opacity 200ms ease",
            backgroundColor: "red",
          }}
        >
          Click to Fade
        </button>
        <p>Opacity {opacity}</p>
      </div>
    );
  }
}

export default FadingButton;
