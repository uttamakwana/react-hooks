import { useCallback, useState } from "react";
import { Hero } from "../../components";
import ItemList from "./ItemList.jsx";

const UseCallback = () => {
  const [input, setInput] = useState(() => 0);
  const [theme, setTheme] = useState(() => "light");
  const btnStyles = {
    backgroundColor:
      theme === "light" ? "var(--clr-black-900)" : "var(--clr-react-official)",
    color: theme === "light" ? "var(--clr-white-900)" : "var(--clr-black-900)",
  };

  //! it has been passed as a props to ItemList but when we toggle theme useEffect inside the ItemList calls every time even though we have set changeItems as a dependencies
  //   function changeItems() {
  //     return [input + 1, input + 2, input + 3];
  //   }
  //! this is happens because when theme toggle this component get re-renders and it declare function each time components re-renders and it passed down props as a new function
  //! so that we only want to declare this function when number gets changed
  //? can we do with useMemo()
  //!! No we can't do with useMemo. because useMemo can not return function
  //does: change items value in list
  const changeItems = useCallback(
    () =>
      function () {
        return [input + 1, input + 2, input + 3];
      },
    [input]
  );

  //does: toggle theme
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <main className="hook-container use-callback-hook-container">
      <Hero
        hookName={"useCallback"}
        heroText={"by updating list of items consecutively"}
      />
      <div className="readable-container my-1">
        <input
          type="number"
          className="input bg-white-800"
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <button
          className="btn px-2 oval block margin-inline-auto uppercase my-1"
          onClick={toggleTheme}
          style={btnStyles}
        >
          {theme}
        </button>
        <ItemList changeItems={changeItems} />
      </div>
    </main>
  );
};

export default UseCallback;
