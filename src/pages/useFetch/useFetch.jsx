import { useState } from "react";
import { Hero } from "../../components";
import { useFetch } from "./hook/useFetch";

const UseFetch = () => {
  const [count, setCount] = useState(() => 1);
  const { value, loading, error } = useFetch(
    `https://dummyjson.com/quotes/${count}`,
    {},
    [count]
  );

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <p className="text-center">Error...</p>;
  }

  return (
    <main className="hook-container use-async-hook-container">
      <Hero
        hookName={"useFetch"}
        heroText={
          "by calling a function asynchronously and getting API whenever we need to call it"
        }
      />
      <div className="| text-center readable-container my-1 fw-600 flex-col gap-1 fs-subheading bg-react text-white-900 p-1 br-10">
        <q className="|">{value.quote}</q>
        <p className="| italic fw-900">by {value.author}</p>
      </div>
      <button
        className="btn margin-inline-auto block"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Fetch quote {count + 1}
      </button>
    </main>
  );
};

export default UseFetch;
