import { IoCloseCircle } from "react-icons/io5";
import { hooks } from "../../constants/hooks";
import "./sidebar.css";
import PropTypes from "prop-types";

const Sidebar = ({ pathname, navigate }) => {

  //does: close the sidebar
  function hideSidebar() {
    document.querySelector(".sidebar").classList.remove("active");
  }
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <p className="| flex-between fs-subheading text-center fw-600 p-1">
          <span>Hooks</span>
          <IoCloseCircle className="pointer" onClick={hideSidebar} />
        </p>
        {hooks.map((hook) => (
          <li
            className={`sidebar-list-item ${
              pathname.endsWith(hook.name) && "active"
            }`}
            key={hook.id}
            onClick={() => navigate(`/${hook.name}`)}
          >
            {hook.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  pathname: PropTypes.string,
  navigate: PropTypes.func,
};
