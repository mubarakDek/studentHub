import React from "react";

const Alert = ({ color, message, action, setAction }) => {
  const handleClick = (e) => {
    setAction("fade");
  };
  return (
    <div
      id="alert"
      className={`alert alert-${color} alert-dismissible ${action}`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="#alert"
        aria-label="Close"
      >
        <span onClick={handleClick} aria-hidden="false">
          &times;
        </span>
      </button>
    </div>
  );
};

export default Alert;
