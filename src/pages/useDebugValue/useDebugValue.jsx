import { Hero } from "../../components"

const UseDebugValue = () => {
  return (
    <main className="hook-container use-debug-value-container">
      <Hero
        hookName={"useDebugValue"}
        heroText={`by creating a custom hook, and it will helps us to debug that custom hook in our React Dev Tools. It just work by simple passing a state value into it`}
      />
      <p className="text-center fw-600 my-1">{`useDebugValue(stateValue)`}</p>
    </main>
  );
};

export default UseDebugValue;
