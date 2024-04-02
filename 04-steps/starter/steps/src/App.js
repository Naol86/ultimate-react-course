import React, { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function add(val) {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &#9747;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step > 0 ? "active" : ""}>1</div>
            <div className={step > 1 ? "active" : ""}>2</div>
            <div className={step > 2 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={() => {
                if (step > 1) setStep(step - 1);
              }}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={() => add(1)}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
