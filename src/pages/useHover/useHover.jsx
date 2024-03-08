import { useRef, useState } from "react";
import { Hero } from "../../components";
import { useHover } from "./hook/useHover.js";

const UseHover = () => {
  const [count, setCount] = useState(() => 0);
  const boxRef = useRef();
  const isHovered = useHover(boxRef, () =>
    setCount((prevCount) => prevCount + 1)
  );
  return (
    <main className="hook-container use-hover-hook-container">
      <Hero
        hookName={"useHover"}
        heroText={
          "by creating a box in which we can apply certain JavaScript or CSS when it's hovered"
        }
      />
      <div
        className="| flex-center readable-container p-2 text-white-900 fw-900 fs-heading br-10"
        style={{ background: isHovered ? "red" : "var(--clr-react-official)" }}
        ref={boxRef}
      >
        {count}
      </div>
    </main>
  );
};

export default UseHover;
