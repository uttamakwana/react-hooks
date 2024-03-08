import { Hero } from "../../components";
import { useCookie } from "./hook/useCookie.js";

const UseCookie = () => {
  const {
    value,
    updateCookie: update,
    deleteCookie: remove,
  } = useCookie("useCookie-name", "Uttam");
  return (
    <main className="hook-container use-cookie-hook-container">
      <Hero
        hookName={"useCookie"}
        heroText={"by storing, updating and deleting values from the cookies"}
      />
      <div className="readable-container my-1 bg-react p-1 br-10 flex-between gap-1">
        <span>Your name: {value}</span>
        <button className="btn" onClick={() => update("Dhaval")}>
          Update to Dhaval
        </button>
        <button className="btn" onClick={remove}>
          Remove
        </button>
      </div>
    </main>
  );
};

export default UseCookie;
