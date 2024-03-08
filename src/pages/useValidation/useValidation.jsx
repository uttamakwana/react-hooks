import { Hero } from "../../components";
import { useValidation } from "./hook/useValidation.js";

const UseValidation = () => {
  const [username, setUsername, isValid] = useValidation(
    "",
    (name) => name.length > 5
  );
  return (
    <main className="hook-container use-validation-hook-container">
      <Hero
        hookName={"useValidation"}
        heroText={"by creating an input that checks validation or not"}
      />
      <div className="readable-container my-1">
        <input
          type="text"
          className={`input bg-white-700`}
          style={{ border: isValid ? "1px solid green" : "1px solid red" }}
          placeholder="Input your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </main>
  );
};

export default UseValidation;
