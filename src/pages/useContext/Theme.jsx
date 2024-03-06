import { useContext } from "react";
import "./theme.css";
import { ThemeContext } from "./ThemeContextProvider";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  //does: toggle theme
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className={`theme-box | flex-center p-1 flex-col gap-4 fs-subheading ${theme === "light" ? "light" : "dark"}`}>
      <p>Currently to {theme} theme</p>
      <button onClick={toggleTheme} className="theme-toggle-btn">Change</button>
    </div>
  );
};

export default Theme;
