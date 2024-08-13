import React, { useContext } from "react";

import {
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";

import "../styles/checkout.scss";

import { AppContext } from "../context";
import SubHeroSection from "../component/common/SubHeroSection";
import Container from "../layout/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCheckoutProducts } from "../mutations/checkout-products";

function Checkout() {
  const { cartData, total } = useContext(AppContext);

  const submitForm = useCheckoutProducts();

  const regions = [
    {
      value: "ktm",
      label: "Kathmandu",
    },
    {
      value: "bkt",
      label: "Bhaktapur",
    },
    {
      value: "lal",
      label: "Lalitpur",
    },
    {
      value: "kir",
      label: "Kirtipur",
    },
  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "",
      lastname: "",
      companyname: "",
      region: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .trim()
        .required("Required Field *")
        .max(50, "Please enter less than 50 characters"),
      lastname: Yup.string()
        .trim()
        .required("Required Field *")
        .max(50, "Please enter less than 50 characters"),
      companyname: Yup.string()
        .trim()
        .max(255, "Please enter less than 50 characters"),
      region: Yup.string().trim().required("Required Field *"),
    }),
    onSubmit: (values) => {
      submitForm.mutate(values, {
        onSuccess: (res) => {
          console.log("res success", res);
        },
        onError: (err) => {
          console.log("res error", err);
        },
      });
    },
  });

  return (
    <div className="checkout-page">
      {/* Hero section */}
      <SubHeroSection module={"Checkout"} />
      <Container>
        <div className="form-container">
          <h2>Billing details</h2>
          <form>
            <FormGroup>
              <div className="form-group">
                <label>First Name</label>
                <TextField
                  variant="outlined"
                  id="firstname"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <span className="error">{formik.errors.firstname}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <TextField
                  variant="outlined"
                  id="lastname"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <span className="error">{formik.errors.lastname}</span>
                ) : (
                  ""
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Company Name (Optional)</label>
                <TextField
                  variant="outlined"
                  id="companyname"
                  name="companyname"
                  value={formik.values.companyname}
                  onChange={formik.handleChange}
                />
                {formik.touched.companyname && formik.errors.companyname ? (
                  <span className="error">{formik.errors.companyname}</span>
                ) : (
                  ""
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Country / Region</label>
                <FormControl fullWidth>
                  <Select
                    id="region"
                    name="region"
                    value={formik.values.region}
                    onChange={formik.handleChange}
                  >
                    {regions?.map((item) => (
                      <MenuItem value={item.value}>{item.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {formik.touched.region && formik.errors.region ? (
                  <span className="error">{formik.errors.region}</span>
                ) : (
                  ""
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Street Address</label>
                <TextField variant="outlined" />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Town / City</label>
                <TextField variant="outlined" />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Province</label>
                <FormControl fullWidth>
                  <Select
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>Bagmati</MenuItem>
                    <MenuItem value={20}>Gandaki</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Phone</label>
                <TextField variant="outlined" />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <label>Email Address</label>
                <TextField variant="outlined" />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="form-group">
                <TextareaAutosize
                  minRows={3}
                  placeholder="Additional Information"
                />
              </div>
            </FormGroup>
          </form>
        </div>
        <div className="checkout-info">
          <div className="products-info-row">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="products-info-row">
            {cartData?.map((item) => (
              <div className="products-info-row--inner">
                <p className="label">
                  {item.title} <span>X {item.quantity}</span>
                </p>
                <p className="value">Rs. {item.subTotal}</p>
              </div>
            ))}
          </div>
          <div className="products-info-row">
            <p className="label">Subtotal</p>
            <p className="value">Rs. {total.subTotal}</p>
          </div>
          <div className="products-info-row">
            <p className="label">Total</p>
            <p className="value">Rs. {total.total}</p>
          </div>

          <button onClick={formik.handleSubmit}>Place Order</button>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
