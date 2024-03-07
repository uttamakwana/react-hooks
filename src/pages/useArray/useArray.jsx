import { Hero } from "../../components";
import { useArray } from "./hook/useArray";

const INITIAL_ARRAY = [1, 2, 3, 4, 5];

const UseArray = () => {
  const { value, push, pop, shift, unshift, filter } = useArray(
    "hook-arr",
    INITIAL_ARRAY
  );
  return (
    <main className="hook-container use-array-hook-container">
      <Hero
        hookName={"useArray"}
        heroText={
          "by implementing necessary array methods used in the application"
        }
      />
      <div className="| readable-container my-1 flex-center flex-col gap-1">
        <div className="| flex gap-8">
          {value.map((e) => (
            <span key={e} className="| fs-subheading fw-600">
              {e}
            </span>
          ))}
        </div>
        <div className="| flex gap-1 ">
          <button className="| btn uppercase" onClick={() => push(7)}>
            Push
          </button>
          <button className="| btn uppercase" onClick={pop}>
            Pop
          </button>
          <button className="| btn uppercase" onClick={shift}>
            Shift
          </button>
          <button className="| btn uppercase" onClick={() => unshift(10)}>
            Unshift
          </button>
          <button className="| btn uppercase" onClick={() => filter((n) => n > 3)}>
            filter
          </button>
        </div>
      </div>
    </main>
  );
};

export default UseArray;
