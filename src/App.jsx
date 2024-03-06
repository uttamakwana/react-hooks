import { Route, Routes, useNavigate } from "react-router-dom";
import { Landing, UseState, UseEffect } from "./pages";
import { FaHome } from "react-icons/fa";

const App = () => {
  const navigate = useNavigate();
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
      <button className="home-icon | btn" onClick={() => navigate("/")}><FaHome /></button>
    </main>
  );
};

export default App;
