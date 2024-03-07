import { Hero } from "../../components";
import { useLocalStorage } from "./hook/useLocalStorage";

const FRUIT_LIST = ["banana", "apple", "orange", "grapes"];

const UseLocalStorage = () => {
  const [input, setInput] = useLocalStorage("hook-input", "");
  const [list, setList] = useLocalStorage("hook-list", FRUIT_LIST);

  //does: updates the list of fruit
  function updateList(value) {
    setInput(value);
    if (value) {
      const updatedList = list.filter((item) =>
        item.toLowerCase().includes(value)
      );
      setList(updatedList);
    } else {
      setList(FRUIT_LIST);
    }
  }
  return (
    <main className="hook-container use-local-storage-hook-container">
      <Hero
        hookName={"useLocalStorage"}
        heroText={"by creating custom hook that persist value when we refresh"}
      />
      <div className="| readable-container my-1">
        <input
          type="text"
          className="| input bg-white-700"
          placeholder="text goes here..."
          value={input}
          onChange={(e) => updateList(e.target.value)}
        />

        <ul className="| flex gap-1">
          {list.length > 0 ? (
            list.map((item) => <li key={item}>{item}</li>)
          ) : (
            <strong>No items</strong>
          )}
        </ul>
      </div>
    </main>
  );
};

export default UseLocalStorage;
