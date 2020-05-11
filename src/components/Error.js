import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div>&nbsp;</div>;
  }
  if (message) {
    return (
      <div className="text-danger" style={{ fontSize: ".8rem" }}>
        {message}
      </div>
    );
  }
  return <div className="form-message invalid">&nbsp;</div>;
};

export default Error;
