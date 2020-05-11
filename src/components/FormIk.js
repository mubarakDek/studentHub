import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Alert from "./Alert";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be longer than 3 characters")
    .max(15, "Name must be shorter than 15 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Email must be a valid email")
    .max(20, "Email must shorter than 20 characters")
    .required("Email is required"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(7)
    .max(14)
    .required("Phone number is required"),

  university: Yup.string().min(3, "must be longer than 3 characters"),

  faculty: Yup.string().min(3, "must be longer than 3 characters"),

  graduateYear: Yup.number()
    .moreThan(2000, "Year must be later than 2000")
    .lessThan(2021, "Year must be 2020 or before"),

  courses: Yup.string(),
});

//=================================================================
const FormikForm = () => {
  const [students, setStudents] = useState([]);
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("fade");

  // Alert

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")));
  }, []);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        university: "",
        faculty: "",
        graduateYear: "",
        courses: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const id = students.length + 101;
        const newStudent = { id, ...values };

        const updateS = students.concat(newStudent);
        localStorage.setItem("students", JSON.stringify(updateS));

        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);

        const alert = (color, message, action) => {
          setColor(color);
          setMessage(message);
          setAction(action);
        };

        const closeAlert = () => {
          setTimeout(function () {
            setAction("fade");
          }, 2000);
        };
        alert("success", "Student saved successfully", "show");
        closeAlert();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <section className="container-fluid bg-light py-5">
          <div className="container">
            <div className="col col-md-8 col-lg-6 m-auto">
              <Alert
                color={color}
                message={message}
                action={action}
                setAction={setAction}
              />
              <div className="card">
                <div className="card-header text-center py-4">
                  <h4 className="mb-0 text-white">Registeration Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <Input
                        label="Student Name:"
                        type="text"
                        name="name"
                        values={values.name}
                        touched={touched.name}
                        errors={errors.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-row">
                      <Input
                        label="Email Address:"
                        type="email"
                        name="email"
                        value={values.email}
                        touched={touched.email}
                        errors={errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-row">
                      <Input
                        label="Phone Number:"
                        type="text"
                        name="phone"
                        values={values.phone}
                        touched={touched.phone}
                        errors={errors.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="details">
                      <h5 className="my-3">Student details:</h5>
                      <div className="form-row">
                        <Input
                          placeholder="University"
                          type="text"
                          name="university"
                          values={values.university}
                          touched={touched.university}
                          errors={errors.university}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          placeholder="Faculty"
                          type="text"
                          name="faculty"
                          values={values.faculty}
                          touched={touched.faculty}
                          errors={errors.faculty}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="form-row">
                        <Input
                          placeholder="Gradudate year"
                          type="text"
                          name="graduateYear"
                          values={values.graduateYear}
                          touched={touched.graduateYear}
                          errors={errors.graduateYear}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          placeholder="Courses"
                          type="text"
                          name="courses"
                          values={values.courses}
                          touched={touched.courses}
                          errors={errors.courses}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
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
      )}
    </Formik>
  );
};

export default FormikForm;
