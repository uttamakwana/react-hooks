import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { hooks } from "../../constants/hooks";
import "./landing.css";

const Landing = () => {
  return (
    <main className="landing-page | max-container">
      <h1 className="landing-page-heading | my-1 fs-heading text-center">React Hooks</h1>
      <main className="| hook-cards-grid">
        {hooks.map((hook) => (
          <div className="hook-card" key={hook.id}>
            <p className="| fs-subheading fw-600 text-center">{hook.name}</p>
            <div className="hook-card-links">
              <a className="hook-card-link" href={hook.codeUrl} target="_blank">
                <FaGithub /> Code
              </a>
              <a
                className="hook-card-link hook-card-link--invert"
                href={hook.reactDoc}
                target="_blank"
              >
                <FaReact /> React Docs
              </a>
            </div>
          </div>
        ))}
      </main>
    </main>
  );
};

export default Landing;
