import React from "react";

const Header = ({ title, children, styleClass }) => {
  return (
    <div className="container-fluid ">
      <div className={`row text-center align-items-center ${styleClass}`}>
        <div className="col">
          <h1 className="text-uppercase">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Title goes here",
  styleClass: "header-hero",
};

export default Header;
