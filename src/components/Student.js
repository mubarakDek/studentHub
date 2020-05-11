import React from "react";
import { Link } from "react-router-dom";

const Student = ({
  student: { id, name, email, phone, details },
  onDelete,
}) => {
  return (
    <div className="col-8 col-md-6 col-lg-4 mx-auto">
      <div
        className="card-body student-card bg-white py-4 mx-auto mb-4"
        style={{ width: "18rem" }}
      >
        <div className="student-card--img">
          <img src={`/images/${id}.jpg`} alt={`"student ${id} "`} />
        </div>
        <h5>{name}</h5>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/students/${id}`} className="btn btn-primary mt-4 btn-sm">
          Read More
        </Link>
        <button
          onClick={(e) => onDelete(id)}
          className="btn btn-danger mt-4 mx-2 btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Student;
