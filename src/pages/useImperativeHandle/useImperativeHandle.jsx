import { useRef, useState } from "react";
import { Hero } from "../../components";
import Model from "./Model";

const UseImperativeHandle = () => {
  const modelRef = useRef();
  const [isPopUpOpen, setIsPopUpOpen] = useState(() => false);

  return (
    <main className="hook-container use-imperative-handle-hook-container">
      <Hero
        hookName={"useImperativeHandle"}
        heroText={
          "by creating different models that have a parent component ref"
        }
      />
      <div className="| readable-container my-1 gap-1 flex-center">
        <button
          className="btn"
          onClick={() => modelRef.current.focusAcceptBtn()}
        >
          Focus Accept
        </button>
        <button
          className="btn"
          onClick={() => modelRef.current.focusDenyBtn()}
        >
          Focus Deny
        </button>
        <button className="btn" onClick={() => setIsPopUpOpen(true)}>
          Open Model
        </button>
      </div>
      <Model
        ref={modelRef}
        isPopUpOpen={isPopUpOpen}
        setIsPopUpOpen={setIsPopUpOpen}
      />
    </main>
  );
};

export default UseImperativeHandle;
