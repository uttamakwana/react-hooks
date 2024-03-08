import { useRef } from "react";
import { Hero } from "../../components";
import { useOnScreen } from "./hook/useOnScreen.js";

const UseOnScreen = () => {
  const pageRef = useRef();
  const isVisible = useOnScreen(pageRef, "-200px");
  return (
    <main className="hook-container use-onscreen-hook-container">
      <Hero
        hookName={"useMemo"}
        heroText={"by creating slow functions that causes performance issues"}
      />
      <div
        className="| flex-center fs-heading fw-900"
        style={{ minHeight: "100svh" }}
      >
        Scroll Down
      </div>
      <div
        className="on-screen-page"
        ref={pageRef}
        style={{
          background: isVisible ? "red" : "yellow",
          opacity: isVisible ? "1" : "0.5",
          transition: "all 1s ease",
          minHeight: "100svh",
        }}
      ></div>
    </main>
  );
};

export default UseOnScreen;
