import React from "react";
import Student from "./Student";

const StudentList = ({ students, onDelete }) => {
  return (
    <section className="container-fluid py-5 header">
      <div className="container">
        {/* Title  */}
        <div className="row">
          <div className="col-10 col-md-6 mx-auto mb-4">
            <h3 className="text-center">Students List</h3>
          </div>
        </div>
        {/* StudentList  */}
        <div className="row">
          {students.map((student) => (
            <Student key={student.id} student={student} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentList;
