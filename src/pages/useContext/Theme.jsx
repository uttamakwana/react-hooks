import "./theme.css";
import { useTheme } from "./ThemeContextProvider";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`theme-box | flex-center p-1 flex-col gap-4 fs-subheading br-10 ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <p>Currently to {theme} theme</p>
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn text-white-900 fs-button fw-600 uppercase"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Theme;
