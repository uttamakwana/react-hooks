import { Route, Routes } from "react-router-dom";
import { Landing, UseState, UseEffect } from "./pages";

const App = () => {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </main>
  );
};

export default App;
