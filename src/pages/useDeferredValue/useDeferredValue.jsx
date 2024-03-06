import { useState } from "react";
import { Hero } from "../../components";
import List from "./List";

const UseDeferredValue = () => {
  const [input, setInput] = useState(() => "");
  //! when two states are changing immediately and there is another code taking two much time then there will be delay
  //! so you only want to change the list once user has input enough and want to see
  // function handleChange(value) {
  //   setInput(value);
  //   const list = [];
  //   for (let i = 0; i < LIST_SIZE; i++) {
  //     list.push(value);
  //   }
  //   setList(list);
  // }

  //does: changes the input and updates the list
  function handleChange(value) {
    setInput(value);
  }

  return (
    <main className="hook-container use-transition-hook-container">
      <Hero
        hookName={"useDeferred"}
        heroText={`by
        implementing a list that changes when user input.`}
      />
      <div className="readable-container flex-center flex-col gap-1">
        <input
          type="text"
          className="bg-white-800 input"
          placeholder="Text goes here"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <List input={input} />
      </div>
    </main>
  );
};

export default UseDeferredValue;
