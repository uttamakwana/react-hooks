import { Hero } from "../../components";
import { useWindow } from "./hook/useWindow.js";

const UseWindow = () => {
  const { width, height } = useWindow();
  return (
    <main className="hook-container use-window-hook-container">
      <Hero
        hookName={"useWindow"}
        heroText={"by getting size of window when we resize the window"}
      />
      <div className="| readable-container text-center fs-heading fw-900 text-react">
        {width} X {height}
      </div>
    </main>
  );
};

export default UseWindow;
