import React, { useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(0);

  renderCount.current = +2;

  return (
    <div>
      <p>Rendered {renderCount.current} times</p>
    </div>
  );
}

export default RenderCounter;
