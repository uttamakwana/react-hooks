import { useRef } from "react";
import { Hero } from "../../components";
import { useSize } from "./hook/useSize.js";

const UseSize = () => {
  const textAreaRef = useRef();
  const size = useSize(textAreaRef);

  return (
    <main className="hook-container use-size-hook-container">
      <Hero
        hookName={"useSize"}
        heroText={
          "by resizing the resizable textarea to see it's coordinates and size"
        }
      />
      <div className="readable-container my-1">
        <p className="fw-900 fs-subheading">{JSON.stringify(size)}</p>
        <textarea ref={textAreaRef}></textarea>
      </div>
    </main>
  );
};

export default UseSize;
