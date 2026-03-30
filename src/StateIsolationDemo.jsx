import { useState } from "react";
import PropTypes from "prop-types";

function Counter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <div>
        <strong>{label}</strong>
      </div>
      <div>
        count: <code>{count}</code>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button
          type="button"
          className="action-btn"
          onClick={() => setCount((c) => c + 1)}
        >
          +1
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={() => setCount(0)}
        >
          reset
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  label: PropTypes.string.isRequired,
};

export function StateIsolationDemo() {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <p style={{ margin: 0 }}>
        同一個 <code>Counter</code>{" "}
        元件放兩次，會產生兩個「元件實例」；每個實例各自有自己的{" "}
        <code>useState</code>。
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        <Counter label="Counter A" />
        <Counter label="Counter B" />
      </div>
    </div>
  );
}
