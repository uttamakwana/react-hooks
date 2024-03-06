import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => "light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};
