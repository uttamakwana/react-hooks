import React, { useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import './model.css';

const Model = ({ isPopUpOpen, setIsPopUpOpen }, ref) => {
  const acceptBtnRef = useRef();
  const denyBtnRef = useRef();

  //does: it will create custom ref that you can forward to your parent and you can access the ref passed down here in the parent component
  useImperativeHandle(
    ref,
    () => {
      return {
        focusAcceptBtn: () => acceptBtnRef.current.focus(),
        focusDenyBtn: () => denyBtnRef.current.focus(),
      };
    },
    []
  );

  return (
    isPopUpOpen && (
      <div
        ref={ref}
        className="model | readable-container my-1 p-1 br-10 bg-react text-white-900"
      >
        <p
          className="| pointer text-right fs-subheading"
          onClick={() => setIsPopUpOpen(false)}
        >
          X
        </p>
        <h1 className="| fs-subheading text-center">Model</h1>
        <div className="| my-8 gap-1 flex-center">
          <button className="btn" ref={acceptBtnRef}>
            Accept
          </button>
          <button className="btn" ref={denyBtnRef}>
            {" "}
            Deny
          </button>
        </div>
      </div>
    )
  );
};

export default React.forwardRef(Model);

Model.propTypes = {
  isPopUpOpen: PropTypes.bool,
  setIsPopUpOpen: PropTypes.func,
};
