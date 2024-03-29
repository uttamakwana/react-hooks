import { useState } from "react";
import { Hero } from "../../components";

const UseState = () => {
  // const [value, setValue] = useState(initialValue);
  // const [counter, setCounter] = useState(0);
  //! initialValue = 0 will be passed down on each render
  // you can pass initialValue like the below for better performance

  const [counter, setCounter] = useState(() => 0);
  //* Now initialValue will be passed down only on the first render.

  //does: Increment count by one
  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  //does: Decrement count by one (only if counter is greater then 0)
  function decrementCounter() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  // component starts here
  return (
    <div className="hook-container use-state-hook-container | text-center flex-col gap-1">
      <Hero
        hookName={"useState"}
        heroText={`by
        implementing incrementing and decrementing a number/counter.`}
      />
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
