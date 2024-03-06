import PropTypes from "prop-types";

export default function Hero({ hookName, heroText }) {
  return (
    <div className="small-container text-center">
      <h1 className="| fs-heading fw-900">
        {hookName} <i>hook</i>
      </h1>
      <p className="| fs-subheading">
        We will understand{" "}
        <q className="| fw-600 text-react ff-manrope">{hookName}</q> {heroText}
      </p>
    </div>
  );
}

Hero.propTypes = {
  hookName: PropTypes.string,
  heroText: PropTypes.string,
};
