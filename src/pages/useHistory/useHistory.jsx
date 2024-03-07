import { useState } from "react";
import { Hero } from "../../components";
import { useHistory } from "./hook/useHistory.js";

const UseHistory = () => {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useHistory(1);
  const [name, setName] = useState("Kyle");
  return (
    <main className="hook-container use-history-hook-container">
      <Hero
        hookName={"useHistory"}
        heroText={`by
        creating history of an array and can perform such action as push, go to particular point, go forward.`}
      />
      <div className="| readable-container flex-col gap-1 flex-center text-center">
        <div>{count}</div>
        <div>{history.join(", ")}</div>
        <div>Pointer - {pointer}</div>
        <div>{name}</div>
        <button className="| btn" onClick={() => setCount((currentCount) => currentCount * 2)}>
          Double
        </button>
        <button className="| btn" onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increment
        </button>
        <button className="| btn" onClick={back}>Back</button>
        <button className="| btn" onClick={forward}>Forward</button>
        <button className="| btn" onClick={() => go(2)}>Go To Index 2</button>
        <button className="| btn" onClick={() => setName("John")}>Change Name</button>
      </div>
    </main>
  );
};

export default UseHistory;
