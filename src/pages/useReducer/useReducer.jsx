import { useReducer } from "react";
import { Hero } from "../../components";

const initialState = {
  counter: 0,
};

//does: reduce the state(updates the state)
function stateReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return { counter: 0 };
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  //does: Increment count by one
  function incrementCounter() {
    dispatch({ type: "increment" });
  }

  //does: Decrement count by one (only if counter is greater then 0)
  function decrementCounter() {
    dispatch({ type: "decrement" });
  }
  return (
    <main className="hook-container use-reducer-hook-container">
      <Hero
        hookName={"useReducer"}
        heroText={`by
        implementing incrementing and decrementing a number/counter.`}
      />
      <div className="flex-center gap-1">
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={decrementCounter}
        >
          -
        </button>
        <p className="| fw-900 fs-subheading p-1">{state.counter}</p>
        <button
          className="| btn fw-900 fs-button pointer"
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
    </main>
  );
};

export default UseReducer;
