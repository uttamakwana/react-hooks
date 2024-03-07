import { useState } from "react";
import { Hero } from "../../components";
import { useDebounce } from "./hook/useDebounce";

const UseDebounce = () => {
  const [input, setInput] = useState(() => "");
  //does: alerts when there is a lag of 1000ms in user typing
  //! it can be used to remove the problem of fetching data from an API when user is constantly typing and sending request to the endpoint (ex: searching for products)
  useDebounce(() => alert(`Your input is ${input}`), 1000, [input]);

  //does: change the input after delay and alerts
  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <main className="hook-container use-debounce-hook-container">
      <Hero
        hookName={"useDebounce"}
        heroText={
          "by model that pops up when user delayed for some seconds in input"
        }
      />
      <div className="| readable-container my-1">
        <input
          type="text"
          className="| input bg-white-700"
          placeholder="text goes here..."
          value={input}
          onChange={handleInput}
        />
        <p className="text-center fw-900 p-1" style={{ position: "absolute" }}>
          {input}
        </p>
      </div>
    </main>
  );
};

export default UseDebounce;
