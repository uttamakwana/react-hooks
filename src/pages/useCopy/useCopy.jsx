import { useRef } from "react";
import { Hero } from "../../components";
import { useCopy } from "./hook/useCopy.js";

const UseCopy = () => {
  const textRef = useRef();
  const { copyToClipboard, value, success } = useCopy();
  return (
    <main className="hook-container use-copy-hook-container">
      <Hero
        hookName={"useCopy"}
        heroText={"by implementing copy to clipboard functionality"}
      />
      <div className="| readable-container my-1 flex-between p-1 br-10 bg-react text-white-900">
        <p className="| fs-subheading fw-600" ref={textRef}>
          Copy this text to clipboard
        </p>
        <button
          className="| btn uppercase"
          onClick={() => copyToClipboard(textRef.current.innerText)}
        >
          {success ? "copied" : "copy"}
        </button>
      </div>
      {value && <p className="text-center">Copied text is: {value}</p>}
    </main>
  );
};

export default UseCopy;
