import { useState, useMemo } from "react";

function shuffleString(str) {
  const arr = str.split("");

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
}

function generatePassword(length, allowNumbers, allowSymbols) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (allowNumbers) chars += "0123456789";
  if (allowSymbols) chars += "!@#$%&()+=-";

  chars = shuffleString(chars);

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSymbols, setAllowSymbols] = useState(false);

  const password = useMemo(
    () => generatePassword(length, allowNumbers, allowSymbols),
    [length, allowNumbers, allowSymbols],
  );

  function handleCopy() {
    navigator.clipboard.writeText(password);
    alert(`Copied : ${password}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-5">
          <div className="flex justify-between text-sm text-slate-300 mb-1">
            <span>Password Length</span>
            <span className="text-white font-semibold">{length}</span>
          </div>

          <input
            type="range"
            min="6"
            max="24"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 text-slate-200">
          <label className="cursor-pointer flex items-center justify-between bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
            <span>Include Numbers</span>
            <input
              type="checkbox"
              checked={allowNumbers}
              onChange={(e) => setAllowNumbers(e.target.checked)}
              className="w-4 h-4 accent-blue-500"
            />
          </label>

          <label className="cursor-pointer flex items-center justify-between bg-slate-800 px-3 py-2 rounded-lg border border-slate-700">
            <span>Include Symbols</span>
            <input
              type="checkbox"
              checked={allowSymbols}
              onChange={(e) => setAllowSymbols(e.target.checked)}
              className="w-4 h-4 accent-blue-500"
            />
          </label>
        </div>

        {/* Strength hint */}
        <div className="mt-5 text-center text-xs text-slate-400">
          Tip: Longer passwords with numbers & symbols are stronger
        </div>
      </div>
    </div>
  );
}
