import { useLayoutEffect, useRef, useState } from "react";
import { Hero } from "../../components";

const UseLayoutEffect = () => {
  const [isPopUp, setIsPopUp] = useState(() => false);
  const popUpRef = useRef(null);
  const btnRef = useRef(null);

  //does: toggle the popup
  function togglePopUp() {
    setIsPopUp((prev) => !prev);
  }

  // useEffect(() => {
  //   if (btnRef.current === null || popUpRef.current === null) return;
  //   const { bottom } = btnRef.current.getBoundingClientRect();
  //   popUpRef.current.style.top = `${bottom + 25}px`;
  // }, [isPopUp]);

  //! the only difference between useEffect vs useLayoutEffect is that, useLayoutEffect run synchronously whereas useEffect runs asynchronously. It means useLayoutEffect runs before the painting of DOM Tree. So it prevents from layout shifting of DOM elements
  useLayoutEffect(() => {
    if (btnRef.current === null || popUpRef.current === null) return;
    const { bottom } = btnRef.current.getBoundingClientRect();
    popUpRef.current.style.top = `${bottom + 25}px`;
  }, [isPopUp]);
  return (
    <main className="hook-container use-layout-effect-hook-container">
      <Hero
        hookName={"useLayoutEffect"}
        heroText={`by
        creating a pop that shifts layout when using normal useEffect but doesn't when we use useLayoutEffect`}
      />
      <div className="flex-center flex-col gap-1 my-2">
        <button className="btn" onClick={togglePopUp} ref={btnRef}>
          Toggle Popup
        </button>
        {isPopUp && (
          <div style={{ position: "absolute" }} ref={popUpRef}>
            This is my popup
          </div>
        )}
      </div>
    </main>
  );
};

export default UseLayoutEffect;
