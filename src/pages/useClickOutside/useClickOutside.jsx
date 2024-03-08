import { useRef, useState } from "react";
import { Hero } from "../../components";
import { useClickOutside } from "./hook/useClickOutside.js";

const UseClickOutside = () => {
  const [model, setModel] = useState(() => false);
  const modelRef = useRef(null);
  console.log(model);
  console.log("Model ref:", modelRef.current); // Add this line to check the modelRef

  useClickOutside(modelRef, () => {
    if (model) setModel(false);
  });

  return (
    <main className="hook-container use-click-outside-hook-container">
      <Hero
        hookName={"useClickOutside"}
        heroText={
          "by creating model that will close when we click on the document outside the model"
        }
      />
      <button
        className="| btn block margin-inline-auto my-1"
        onClick={(e) => {
          e.stopPropagation();
          setModel((prevModel) => !prevModel);
        }}
      >
        Open Model
      </button>

      <div
        className="| absolute-center pointer fw-900 p-2 br-10 bg-react text-white-900 fs-heading"
        ref={modelRef}
        style={{ display: model ? "block" : "none" }}
      >
        This is model
      </div>
    </main>
  );
};

export default UseClickOutside;
