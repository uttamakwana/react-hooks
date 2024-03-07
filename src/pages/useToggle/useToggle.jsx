import { Hero } from "../../components";
import { useToggle } from "./hook/useToggle";

const UseToggle = () => {
  const [model, handleModel] = useToggle(false);

  return (
    <main className="hook-container use-toggle-hook-container">
      <Hero
        hookName={"useToggle"}
        heroText={
          "by creating models which toggles, open and close. (which also use custom hook useLocalStorage."
        }
      />
      <div className="| readable-container my-1 flex-col gap-8 flex-center">
        {model && <p className="text-center">Model</p>}
        <div className="| flex gap-1">
          <button className="btn" onClick={() => handleModel()}>
            Toggle
          </button>
          <button className="btn" onClick={() => handleModel(true)}>
            True
          </button>
          <button className="btn" onClick={() => handleModel(false)}>
            False
          </button>
        </div>
      </div>
    </main>
  );
};

export default UseToggle;
