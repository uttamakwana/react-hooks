import { useState } from "react";
import { Hero } from "../../components";
import { useTimeout } from "./hook/useTimeout.js";

const UseTimeout = () => {
  const [count, setCount] = useState(() => 10);
  //does: it will allow you to perform action after some delay
  //! here after one second you are setting count to 0
  //? the advantage over here is that it will not cause the infinite-render and will perform action every time you change the delay and callback
  //! clear, reset are option if you don't want to use timeout then just use clear to clear the timeout and if you want to reset means you want to clear the timeout and perform the callback action you can do this
  const { clear, reset } = useTimeout(() => setCount(0), 1000);
  return (
    <main className="hook-container use-timeout-hook-container">
      <Hero
        hookName={"useTimeout"}
        heroText={
          "by creating counter which set to 0 from 10 when page loads and you can increment and can clear that timeout"
        }
      />
      <div className="| readable-container my-1 text-center">
        <p className="| fw-900 fs-subheading">{count}</p>
        <div className="| gap-1 flex-center">
          <button className="| btn" onClick={clear}>
            Clear Timeout
          </button>
          <button className="| btn" onClick={reset}>
            Reset Timeout
          </button>
        </div>
      </div>
    </main>
  );
};

export default UseTimeout;
