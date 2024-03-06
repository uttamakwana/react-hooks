import { Hero } from "../../components";
import ThemeContextProvider from "./ThemeContextProvider";
import Theme from "./Theme.jsx";

const UseContext = () => {
  return (
    <ThemeContextProvider>
      <main className="hook-container use-content-hook-container">
        <Hero
          hookName={"useContext"}
          heroText={"by implementing theme toggle"}
        />
        <Theme />
      </main>
    </ThemeContextProvider>
  );
};

export default UseContext;
