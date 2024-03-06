import { useEffect, useMemo, useState } from "react";
import { Hero } from "../../components";

const UseMemo = () => {
  const [input, setInput] = useState(() => 0);
  const [theme, setTheme] = useState(() => "light");
  //! double will slow down the performance by looping over numbers
  // const doubledNumber = double(input);
  //! so if client changes theme => double will executes even if it doesn't need to be and lead to decrease the performance
  //! so that it needs to be memoized by input, it means executes this function only ones the number state changes
  const doubledNumber = useMemo(() => double(input), [input]);

  const btnStyles = useMemo(() => {
    return {
      backgroundColor:
        theme === "light"
          ? "var(--clr-black-900)"
          : "var(--clr-react-official)",
      color:
        theme === "light" ? "var(--clr-white-900)" : "var(--clr-black-900)",
    };
  }, [theme]);

  //does: decrease performance by looping over millions number
  function double(input) {
    for (let i = 0; i < 1000000000; i++) {
      continue;
    }
    return input * 2;
  }

  //does: toggle theme
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  //! this useEffect must executes code inside when btnStyles object get changed
  //! client input something theme doesn't toggles so it means btnStyles should be changed, but you will see that this useEffect executes code inside it
  //!! objects with same properties are not considered to be true because they are stored and compared by reference not by the values
  useEffect(() => {
    console.log("useEffect calls");
  }, [btnStyles]);

  return (
    <main className="hook-container use-memo-hook-container">
      <Hero
        hookName={"useMemo"}
        heroText={"by creating slow functions that causes performance issues"}
      />
      <div className="readable-container my-1">
        <input
          type="number"
          className="input bg-white-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn px-2 oval block margin-inline-auto uppercase my-1"
          onClick={toggleTheme}
          style={btnStyles}
        >
          {theme}
        </button>
        <p className="text-center py-1 bg-white-800">{doubledNumber}</p>
      </div>
    </main>
  );
};

export default UseMemo;
