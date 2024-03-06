import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Landing, UseState, UseEffect, UseContext, UseRef, UseMemo } from "./pages";
import { FaBars, FaHome } from "react-icons/fa";
import { Sidebar } from "./components";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //does: show the sidebar
  function showSidebar() {
    document.querySelector(".sidebar").classList.add("active");
  }
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useMemo" element={<UseMemo />} />
      </Routes>
      {pathname !== "/" && (
        <>
          <button className="home-icon" onClick={() => navigate("/")}>
            <FaHome />
          </button>
          <button className="sidebar-icon" onClick={showSidebar}>
            <FaBars />
          </button>
          <Sidebar pathname={pathname} navigate={navigate} />
        </>
      )}
    </main>
  );
};

export default App;
