import { useEffect, useRef, useState } from "react";
import { Hero } from "../../components";

const UseRef = () => {
  const [input, setInput] = useState(() => "");
  const renderedCount = useRef(1);
  console.count("component rendered");

  //!! Here useEffect will not cause infinite re-render due to useRef cause it doesn't cause into any state change so that useEffect will run only once even without dependencies
  useEffect(() => {
    //! it is just like the state but doesn't re-renders the component and persist the value it holds between re-renders
    //! if you have used to store 'renderedCount' value into a state variable without dependencies, it will eventually cause the infinite re-render
    //! After the first render it ultimately increase the renderedCount to 2 but will not cause re-render and will persist the value 2. When we change the input by setInput it will cause the re-render and we can see that renderedCount will print the value 2 and will increase to the 3
    renderedCount.current += 1;
  });

  return (
    <main className="hook-container use-ref-hook-container">
      <Hero
        hookName={"useRef"}
        heroText={"by persisting value between re-renders."}
      />
      <div className="readable-container my-1">
        <input
          type="text"
          className="input bg-white-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-center">{input}</p>
        <p className="text-center py-1">
          Component Render Count: {renderedCount.current}
        </p>
      </div>
    </main>
  );
};

export default UseRef;
