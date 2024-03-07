import { useState } from "react";
import { Hero } from "../../components";
import { usePrevious } from "./hook/usePrevious.js";

const UsePrevious = () => {
  const [count, setCount] = useState(() => 0);
  const [name, setName] = useState(() => "Uttam");
  const previousValue = usePrevious(count);

  //does: Increment count by one
  function incrementCounter() {
    setCount((prev) => prev + 1);
  }

  //does: Decrement count by one (only if counter is greater then 0)
  function decrementCounter() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <main className="hook-container use-previous-hook-container">
      <Hero
        hookName={"usePrevious"}
        heroText={`by
        a counter which can increment and decrement and can have its previous value stored.`}
      />
      <div className="| readable-container">
        <div className="flex-center gap-1">
          <button
            className="| btn fw-900 fs-button pointer"
            onClick={decrementCounter}
          >
            -
          </button>
          <p className="| fw-900 fs-subheading p-1">{count}</p>
          <button
            className="| btn fw-900 fs-button pointer"
            onClick={incrementCounter}
          >
            +
          </button>
        </div>
        <div className="flex-col flex-center gap-1">
          <p className="| text-center">{name}</p>
          <button className="| btn" onClick={() => setName("Dhaval")}>
            Change Name
          </button>
        </div>
        {(previousValue || previousValue === 0) && (
          <p className="| text-center fs-subheading my-1 fw-900">
            Previous Value:{previousValue}
          </p>
        )}
      </div>
    </main>
  );
};

export default UsePrevious;
