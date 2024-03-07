import { useState } from "react";
import { Hero } from "../../components";
import { useAdvancedEffect } from "./hook/useAdvancedEffect.js";

const UseAdvancedEffect = () => {
  const [count, setCount] = useState(() => 0);

  useAdvancedEffect(() => alert(`Count value is: ${count}`), [count]);
  return (
    <main className="hook-container use-advanced-effect-container">
      <Hero
        hookName={"useAdvancedEffect"}
        heroText={
          "by creating component that will not execute callback of useEffect on the first render"
        }
      />
      <div className="flex-center gap-1 my-1">
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <p className="| fw-900 fs-subheading p-1">{count}</p>
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </main>
  );
};

export default UseAdvancedEffect;
