import React from "react";
import Error from "./Error";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  touched,
  errors,
  onChange,
  onBlur,
}) => {
  return (
    <div className="form-group col mb-2 col-xs-12">
      <div className="d-flex align-items-center">
        {label && <label className="mb-1 mr-2">{label}</label>}
        <Error touched={touched} message={errors} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={
          touched && errors
            ? "form-control is-invalid form-control-sm"
            : "form-control form-control-sm"
        }
      />
    </div>
  );
};

export default Input;
