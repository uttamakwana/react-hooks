/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => "light");

  //does: toggle theme
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// exporting custom hook that return our ThemeContext
export function useTheme() {
  return useContext(ThemeContext)
}

// defining types of props
ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};

export default ThemeContextProvider;