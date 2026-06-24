import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";
import Card from "./components/Card.jsx";
import BgChanger from "./components/BgChanger.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <Card name="Arun Neupane" btnText="Click Me" />
    <Card name="Thesthesti" btnText="Visit Me" />
    <BgChanger />
    <PasswordGenerator />
  </StrictMode>,
);
