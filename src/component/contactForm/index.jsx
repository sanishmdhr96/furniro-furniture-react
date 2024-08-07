import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "../../styles/contact.scss";

// import { Icons } from "../../assets";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../duck/contact/service";

function FormSection() {
  const dispath = useDispatch();

  const { contactLoading, contactPayload, contactErrors } = useSelector(
    (state) => ({
      contactLoading: state.contact.loading,
      contactPayload: state.contact.payload,
      contactErrors: state.contact.errors,
    })
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      dispath(addContact(values));
    },
  });

  // useEffect(() => {
  //   console.log(contactPayload);
  //   if (contactPayload?.id) {
  //     prompt("Thank you for contacting us.");
  //   }

  //   if (contactErrors) {
  //     prompt("Please try again");
  //   }
  // }, [contactPayload, contactErrors]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="info-upper">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="info-lower">
          <div className="info-items">
            <div class="info-item">
              {/* <span>
                <img src={Icons.Map} alt="map" />
              </span> */}
              <h2>Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div class="info-item">
              {/* <span>
                <img src={Icons.Phone} alt="phone" />
              </span> */}
              <h2>Phone</h2>
              <p>
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
            <div class="info-item">
              {/* <span>
                <img src={Icons.Clock} alt="clock" />
              </span> */}
              <h2>Working Time</h2>
              <p>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className="form">
            <form
              id="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                formik.submitForm();
              }}
            >
              <label>Your name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Abc"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <span
                  style={{
                    fontSize: "12px",
                    color: "red",
                    marginTop: "0",
                  }}
                >
                  {formik.errors.fullName}
                </span>
              ) : null}

              <label>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <label>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is optional"
                value={formik.values.subject}
                onChange={formik.handleChange}
              />

              <label>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I'd like to ask about"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>

              <button type="submit">
                {contactLoading ? "Please wait..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormSection;
