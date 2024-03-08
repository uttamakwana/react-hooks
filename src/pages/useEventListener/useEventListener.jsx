import { useState } from "react";
import { Hero } from "../../components";
import { useEventListener } from "./hook/useEventListener.js";

const UseEventListener = () => {
  const [key, setKey] = useState(() => "");
  useEventListener("keydown", (e) => setKey(e.key));

  return (
    <main className="hook-container use-event-listener-hook-container">
      <Hero
        hookName={"useEventListener"}
        heroText={`by creating events and handling them`}
      />
      <div className="text-center fw-900 fs-subheading">Key: {key}</div>
    </main>
  );
};

export default UseEventListener;
