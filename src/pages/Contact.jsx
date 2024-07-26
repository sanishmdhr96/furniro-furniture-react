import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";

function Contact() {
  /**
   * Uncontrolled
   * -> JS -> id -> document.getelementbyid()
   * -> ref
   *
   * Controlled
   * 
   *   const firstname = useRef(null);
        const lastname = useRef(null);

        const handleSubmit = (e) => {
            e.preventDefault();
            const payload = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            };
            if (payload.firstname.includes("@")) {
            console.log("invalid");
            } else {
            console.log("firstname", payload);
            }
        };


        -->> HTML 
           <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input ref={firstname} type="text" name="firstname" />
      </label>
      <label>
        Last Name
        <input ref={lastname} type="text" name="lastname" />
      </label>
      <input type="submit" />
    </form>
   */

  /*const [firstname, setFirstname] = useState("Sanis22h");
  const [lastname, setLastname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      firstname,
      lastname,
    };
    console.log(payload);
  };*/

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First name is required")
        .max(50, "Please enter less than 50 chars"),
      lastname: Yup.string()
        .required("First name is required")
        .max(50, "Please enter less than 50 chars"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.submitForm();
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <span
            style={{
              fontSize: "12px",
              color: "red",
            }}
          >
            {formik.errors.firstname}
          </span>
        ) : null}
      </div>

      <label>
        Last Name
        <input
          type="text"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <span>{formik.errors.lastname}</span>
        ) : null}
      </label>
      <input type="submit" />
    </form>
  );
}

export default Contact;
