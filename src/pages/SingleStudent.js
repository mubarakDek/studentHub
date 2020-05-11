import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleStudent = (props) => {
  const [students] = useState(JSON.parse(localStorage.getItem("students")));

  const { id: st_id } = props.match.params;
  const filteredStudent = students.filter((s) => s.id === +st_id);
  const {
    id,
    name,
    email,
    phone,
    university,
    faculty,
    graduateYear,
    courses,
  } = filteredStudent[0];
  console.log(filteredStudent[0]);
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/students" className="btn btn-warning mb-3">
              Back to Students List
            </Link>
            <img
              src={`/images/${id}.jpg`}
              alt={`student ${101}`}
              className="d-block w-100"
              style={{ maxHeight: "24rem" }}
            ></img>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h4 className="mb-4">Student Information:</h4>
            <ul className="list-group mt-2">
              <li className="list-group-item">{id}</li>
              <li className="list-group-item">{name}</li>
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{phone}</li>
              <li className="list-group-item">{university}</li>
              <li className="list-group-item">{faculty}</li>
              <li className="list-group-item">{graduateYear}</li>
              <li className="list-group-item">{courses}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleStudent;
