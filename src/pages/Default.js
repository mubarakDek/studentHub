import React from "react";
import Header from "../components/Header";

const Default = () => {
  return (
    <Header title="404" styleClass="default-hero header">
      <p>The page you are trying to open could not be found on the server</p>
    </Header>
  );
};

export default Default;
