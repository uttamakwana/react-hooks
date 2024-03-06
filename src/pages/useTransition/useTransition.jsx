import { useState, useTransition } from "react";
import { Hero } from "../../components";

const LIST_SIZE = 20000;

const UseTransition = () => {
  const [input, setInput] = useState(() => "");
  const [list, setList] = useState(() => []);
  const [isPending, startTransition] = useTransition();

  //! when two states are changing immediately and there is another code taking two much time then there will be delay
  //! so you only want to change the list once user has input enough and want to see
  //does: changes the input and updates the list
  // function handleChange(value) {
  //   setInput(value);
  //   const list = [];
  //   for (let i = 0; i < LIST_SIZE; i++) {
  //     list.push(value);
  //   }
  //   setList(list);
  // }

  function handleChange(value) {
    setInput(value);
    startTransition(() => {
      if (value) {
        const list = [];
        for (let i = 0; i < LIST_SIZE; i++) {
          list.push(value);
        }
        setList(list);
      } else {
        setList([]);
      }
    });
  }
  return (
    <main className="hook-container use-transition-hook-container">
      <Hero
        hookName={"useTransition"}
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
        <div className="text-center py-1 fw-600 flex-col gap-8">
          {isPending ? (
            <>loading...</>
          ) : (
            list.map((item, index) => (
              <p className="text-center" key={index}>
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default UseTransition;
