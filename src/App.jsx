import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  Landing,
  UseState,
  UseEffect,
  UseContext,
  UseRef,
  UseMemo,
  UseCallback,
  UseReducer,
  UseTransition,
  UseDeferredValue,
  UseLayoutEffect,
  UseDebugValue,
  UseImperativeHandle,
  UseId,
  UseLocalStorage,
  UseToggle,
  UseTimeout,
  UseDebounce,
  UseAdvancedEffect,
  UseArray,
  UsePrevious,
  UseHistory,
  UseAsync,
  UseFetch,
  UseEventListener,
  UseOnScreen,
  UseWindow,
  UseValidation,
  UseSize,
  UseClickOutside,
  UseCopy,
  UseCookie,
  UseHover,
  UseLongPress
} from "./pages";
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
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useTransition" element={<UseTransition />} />
        <Route path="/useDeferredValue" element={<UseDeferredValue />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useDebugValue" element={<UseDebugValue />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/useId" element={<UseId />} />
        <Route path="/useLocalStorage" element={<UseLocalStorage />} />
        <Route path="/useToggle" element={<UseToggle />} />
        <Route path="/useTimeout" element={<UseTimeout />} />
        <Route path="/useDebounce" element={<UseDebounce />} />
        <Route path="/useAdvancedEffect" element={<UseAdvancedEffect />} />
        <Route path="/useArray" element={<UseArray />} />
        <Route path="/usePrevious" element={<UsePrevious />} />
        <Route path="/useHistory" element={<UseHistory />} />
        <Route path="/useAsync" element={<UseAsync />} />
        <Route path="/useFetch" element={<UseFetch />} />
        <Route path="/useEventListener" element={<UseEventListener />} />
        <Route path="/useOnScreen" element={<UseOnScreen />} />
        <Route path="/useWindow" element={<UseWindow />} />
        <Route path="/useValidation" element={<UseValidation />} />
        <Route path="/useSize" element={<UseSize />} />
        <Route path="/useClickOutside" element={<UseClickOutside />} />
        <Route path="/useCopy" element={<UseCopy />} />
        <Route path="/useCookie" element={<UseCookie />} />
        <Route path="/useHover" element={<UseHover />} />
        <Route path="/useLongPress" element={<UseLongPress />} />
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
