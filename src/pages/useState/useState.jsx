import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  function decrementCounter() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }
  return (
    <div className="hook-container use-state-hook-container | text-center flex-col gap-1">
      <h1 className="| fs-heading fw-900">
        useState <i>hook</i>
      </h1>
      <p className="| fs-subheading">
        We will understand{" "}
        <q className="| fw-600 text-info ff-manrope">useState</q> by
        implementing incrementing and decrementing a number/counter.
      </p>
      <div className="flex-center gap-1">
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={decrementCounter}
        >
          -
        </button>
        <p className="| fw-900 fs-subheading p-1">{counter}</p>
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseState;
