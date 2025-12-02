"use client";

import { useState, useEffect, useCallback } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const calculate = useCallback((a: number, b: number, op: string) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
      default: return b;
    }
  }, []);

  const handleNumber = useCallback((num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(prev => prev === "0" ? num : prev + num);
    }
  }, [newNumber]);

  const handleOperation = useCallback((op: string) => {
    const current = parseFloat(display);
    
    if (prevValue === null) {
      setPrevValue(current);
    } else if (operation) {
      const result = calculate(prevValue, current, operation);
      setPrevValue(result);
      setDisplay(String(result));
    }
    
    setOperation(op);
    setNewNumber(true);
  }, [display, prevValue, operation, calculate]);

  const handleEqual = useCallback(() => {
    if (operation && prevValue !== null) {
      const current = parseFloat(display);
      const result = calculate(prevValue, current, operation);
      setDisplay(String(result));
      setPrevValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  }, [display, prevValue, operation, calculate]);

  const handleClear = useCallback(() => {
    setDisplay("0");
    setPrevValue(null);
    setOperation(null);
    setNewNumber(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        handleNumber(e.key);
      } else if (["+", "-", "*", "/"].includes(e.key)) {
        handleOperation(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault(); // Prevent form submission if inside form
        handleEqual();
      } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
        handleClear();
      } else if (e.key === "Backspace") {
        // Optional: Backspace support could be added here
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNumber, handleOperation, handleEqual, handleClear]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-gray-100 max-w-sm mx-auto mb-16">
      <h3 className="text-xl font-bold text-gray-400 mb-6 text-center tracking-widest uppercase text-xs">Safe Space Calculator</h3>
      <div className="bg-[#fdfbf7] p-6 rounded-xl mb-6 text-right text-3xl font-mono text-gray-700 font-bold border-2 border-gray-100 overflow-hidden">
        {display}
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => ["/"].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
            className={`p-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${
              ["/"].includes(btn) 
                ? "bg-green-50 text-green-700 hover:bg-green-100" 
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() => ["*"].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
            className={`p-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${
              ["*"].includes(btn) 
                ? "bg-green-50 text-green-700 hover:bg-green-100" 
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() => ["-"].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
            className={`p-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${
              ["-"].includes(btn) 
                ? "bg-green-50 text-green-700 hover:bg-green-100" 
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="p-4 rounded-xl font-bold text-lg transition-all active:scale-95 bg-red-50 text-red-600 hover:bg-red-100"
        >
          C
        </button>
        <button
          onClick={() => handleNumber("0")}
          className="p-4 rounded-xl font-bold text-lg transition-all active:scale-95 bg-gray-50 text-gray-600 hover:bg-gray-100"
        >
          0
        </button>
        <button
          onClick={handleEqual}
          className="p-4 rounded-xl font-bold text-lg transition-all active:scale-95 bg-gray-800 text-white hover:bg-gray-900"
        >
          =
        </button>
        <button
          onClick={() => handleOperation("+")}
          className="p-4 rounded-xl font-bold text-lg transition-all active:scale-95 bg-green-50 text-green-700 hover:bg-green-100"
        >
          +
        </button>
      </div>
      <p className="text-center mt-6 text-sm text-gray-400">
        No variables. No letters. Just vibes.
      </p>
    </div>
  );
}
