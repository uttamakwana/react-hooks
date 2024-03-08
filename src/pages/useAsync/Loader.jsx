import "./loader.css";

const Loader = () => {
  return (
    <div className="flex-col flex-center gap-1">
      <div className="spinner"></div>
      <p className="text-center fw-600">Loading...</p>
    </div>
  );
};

export default Loader;
