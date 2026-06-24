import { useState } from "react";
// hooks -> useState
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (count > 0) setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
