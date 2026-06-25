import { useState } from "react";

const BgChanger = () => {
  const [currentColor, setCurrentColor] = useState("#fff");
  const colors = "0123456789abcdef";
  function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colors[Math.floor(Math.random() * colors.length)];
    }
    setCurrentColor(color);
  }
  return (
    <div
      className={`h-20 m-2 w-full flex gap-4 items-center justify-center`}
      style={{ backgroundColor: currentColor }}
    >
      <button
        onClick={randomColor}
        className="bg-white text-black cursor-pointer px-4 py-2 rounded-xl"
      >
        Random Color
      </button>
      <button
        onClick={() => setCurrentColor("red")}
        className="bg-red-400 text-white cursor-pointer px-4 py-2 rounded-xl"
      >
        Red
      </button>
      <button
        onClick={() => setCurrentColor("blue")}
        className="bg-blue-400 text-white cursor-pointer px-4 py-2 rounded-xl"
      >
        Blue
      </button>
      <button
        onClick={() => setCurrentColor("green")}
        className="bg-green-400 text-white cursor-pointer px-4 py-2 rounded-xl"
      >
        Green
      </button>
    </div>
  );
};

export default BgChanger;
