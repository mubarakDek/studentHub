import React, { useState, useEffect } from "react";
import StudentList from "../components/StudentList";
const Students = () => {
  const [students, setStudents] = useState([]);

  console.log(students);
  useEffect(() => {
    const data = localStorage.getItem("students");
    if (data) {
      setStudents(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  });

  const handleDelete = (id) => {
    const filteredStudents = students.filter((s) => s.id !== id);
    setStudents(filteredStudents);
  };

  return <StudentList students={students} onDelete={handleDelete} />;
};

export default Students;
