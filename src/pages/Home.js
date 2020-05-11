import React from "react";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Students from "./Students.js";

const Home = () => {
  return (
    <>
      <Header title="Students Hub" styleClass="header-hero header">
        <Link to="/register" className="btn btn-primary mt-3 px-4">
          Register
        </Link>
      </Header>
      <Students />
    </>
  );
};

export default Home;
