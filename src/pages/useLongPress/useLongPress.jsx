import { useRef } from "react";
import { Hero } from "../../components";
import { useLongPress } from "./hook/useLongPress.js";

const UseLongPress = () => {
  const boxRef = useRef();
  useLongPress(boxRef, () => alert("Welcome to the React Hooks"), {
    delay: 1000,
  });
  return (
    <main className="hook-container use-long-press-hook-container">
      <Hero
        hookName={"useLongPress"}
        heroText={
          "by creating a box, if you press long enough then there will be a callback"
        }
      />
      <div
        ref={boxRef}
        className="| my-1 p-2 br-10 bg-react text-center text-white-900 fs-heading fw-900"
      >
        Long Press Here
      </div>
    </main>
  );
};

export default UseLongPress;
