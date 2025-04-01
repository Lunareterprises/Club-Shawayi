"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FranchiseForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
    notRobot: false,
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    location: Yup.string().required("Preferred location is required"),
    reason: Yup.string().required("Please specify why you want the franchise"),
    notRobot: Yup.boolean().oneOf([true], "Please verify you're not a robot"),
    terms: Yup.boolean().oneOf([true], "You must agree to the terms"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-[#1F1F1F] w-3xl">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Franchise</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4 text-sm ">
              <div>
                <label className="block mb-1 text-[14px]">Name</label>
                <Field type="text" name="name" className="w-full p-2 border rounded" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-[12px]" />
              </div>

              <div>
                <label className="block mb-1 text-[14px]">Email Address</label>
                <Field type="email" name="email" className="w-full p-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-[12px]" />
              </div>

              <div>
                <label className="block mb-1 text-[14px]">Phone Number</label>
                <Field type="text" name="phone" className="w-full p-2 border rounded" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-[12px]" />
              </div>

              <div>
                <label className="block mb-1 text-[14px]">Preferred Location</label>
                <Field type="text" name="location" className="w-full p-2 border rounded" />
                <ErrorMessage name="location" component="div" className="text-red-500 text-[12px]" />
              </div>

              <div>
                <label className="block mb-1 ">Why C Club Shawayi Franchise?</label>
                <Field as="textarea" name="reason" className="w-full p-2 border rounded" />
                <ErrorMessage name="reason" component="div" className="text-red-500 text-[12px]" />
              </div>

              

              <div className="flex items-start">
                <Field type="checkbox" name="terms" className="mr-2 mt-1" />
                <label>
                <p className="font-semibold">Terms & Condition</p> <p className="text-[13px]">By submitting this form, you agree to our terms and acknowledge that we may contact you via phone at the number you provide.</p>
                </label>
              </div>
              <ErrorMessage name="terms" component="div" className="text-red-500 text-[12px]" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit & Get Franchise
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FranchiseForm;
