import { useRef } from "react";

export default function RenderCounter() {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <section>
      <h2>Render Counter (useRef)</h2>
      <p>Rendered {renderCount.current} times</p>
    </section>
  );
}
