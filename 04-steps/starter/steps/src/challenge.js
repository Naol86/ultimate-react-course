import { useState } from "react";
function Challenge() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date.toDateString());

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        count: {count}
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>
      <p>
        {" "}
        {count === 0
          ? "today is "
          : count > 0
          ? `the day after ${count} days is `
          : `the day before ${Math.abs(count)} days is `}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Challenge;
