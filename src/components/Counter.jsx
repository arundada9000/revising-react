import { useState } from "react";
// hooks -> useState
const Counter = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <h1>Counter</h1>
      <button
        className="border-none px-4 py-2 rounded-md bg-green-400 text-white cursor-pointer hover:opacity-80 transition-all"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>
      <button
        disabled={count <= 0}
        className={`border-none px-4 py-2 rounded-md bg-red-400 text-white hover:opacity-80 transition-all ${
          count <= 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        onClick={() => {
          setCount((c) => c - 1);
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
