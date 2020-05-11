import React, { useState, useEffect } from "react";
import Input from "./Input";
//import Joi from "joi-browser";

const Form = () => {
  const [students, setStudents] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [graduateYear, setGraduateYear] = useState("");
  const [courses, setCourses] = useState("");
  const [errors, setErrors] = useState("");

  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = students.length + 101;
    const newStudent = {
      id,
      name,
      email,
      phone,
      university,
      faculty,
      graduateYear,
      courses,
    };

    setStudents([...students, newStudent]);
    localStorage.setItem("students", JSON.stringify(students));

    setName("");
    setEmail("");
    setPhone("");
    setUniversity("");
    setFaculty("");
    setGraduateYear("");
    setCourses("");

    console.log("student saved");
  };

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")));
  }, []);

  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <div className="col col-md-8 col-lg-6 m-auto">
          <div className="card">
            <div className="card-header bg-primary text-center py-4">
              <h4 className="mb-0 text-white">Registeration Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <Input
                    label="Student Name:"
                    type="text"
                    value={name}
                    error={nameError}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <Input
                    label="Email:"
                    type="email"
                    value={email}
                    error={errors}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <Input
                    label="Phone Number:"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="student-details mt-4">
                  <h5>Student Details:</h5>
                  <div className="form-row">
                    <Input
                      placeholder="University"
                      type="text"
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                    />
                    <Input
                      placeholder="Faculty"
                      type="text"
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      placeholder="Graduate Year"
                      type="text"
                      value={graduateYear}
                      onChange={(e) => setGraduateYear(e.target.value)}
                    />
                    <Input
                      placeholder="Courses"
                      type="text"
                      value={courses}
                      onChange={(e) => setCourses(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
