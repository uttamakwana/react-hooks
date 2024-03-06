import { useState, useEffect } from "react";
import { Hero } from "../../components";


const UseEffect = () => {
  const [currentTab, setCurrentTab] = useState(() => "Nothing happens");
  const [counter, setCounter] = useState(() => 0);

  //does: change the currentTab
  function handleCurrentTab(tab) {
    if (currentTab !== tab) {
      setCurrentTab(tab);
    } else {
      return;
    }
  }

  //does: Increment count by one
  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  //does: Decrement count by one (only if counter is greater then 0)
  function decrementCounter() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }
  //! Dependencies: The code in useEffect only runs when certain dependencies(states) get changes
  //! If you don't provide dependencies the code inside useEffect runs every time
  //! If you don't provide dependencies and change the state value inside the useEffect it will cause infinite re-render and ultimately crash the application
  useEffect(() => {
    console.count("function inside useEffect rendered");

    //! When component gets unmounted the function passed down in the return will be executed
    //! Component will unmount first (only after the first render) and then only re-renders when the state changes
    return () => {
      console.log("component unmounted!");
    };
  }, [currentTab]);

  return (
    <div className="hook-container use-effect-hook-container | text-center flex-col gap-1">
      <Hero
        hookName={"useEffect"}
        heroText={"by making a request to the endpoint of API."}
      />
      <div className="| flex-center gap-1">
        <button
          className="btn"
          onClick={() => handleCurrentTab("Nothing happens")}
        >
          Nothing happens
        </button>
        <button className="btn" onClick={() => handleCurrentTab("Posts")}>
          Posts
        </button>
        <button className="btn" onClick={() => handleCurrentTab("Users")}>
          Users
        </button>
        <button className="btn" onClick={() => handleCurrentTab("Products")}>
          Products
        </button>
      </div>
      <p className="fs-subheading text-center fw-600">{currentTab}</p>
      {/* useState buttons to showcase how useEffect works */}
      <div className="flex-center gap-1">
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={decrementCounter}
        >
          -
        </button>
        <p className="| fw-900 fs-subheading p-1">{counter}</p>
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
