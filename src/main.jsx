import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/utils.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
