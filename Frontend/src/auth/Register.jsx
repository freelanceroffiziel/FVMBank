import React from "react";
import { RiEyeOffFill } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // TanStack Mutation
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Show toast first
      toast.success("Registration successful!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed");
    },
  });

  return (
    <>
      <main
        id="regisCon"
        className="lg:mt-[20vh] mt-[15vh] md:mt-[15vh] w-full"
      >
        <section
          id="regisSon"
          className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex-col flex gap-4 bg-white px-6 md:px-10 lg:px-6 py-12 rounded-lg shadow-lg text-navyBlue h-full"
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-center text-[35px] lg:text-[30px] md:text-[40px] font-serif font-semibold text-teal-800">
              Register
            </h1>
            <hr className="w-[60px] border-red-800 lg:border-2 border-4 border-dashed rounded-full" />
          </div>
          <div id="formCon">
            <ToastContainer className="mt-14" />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const payload = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password,
                };

                mutation.mutate(payload, {
                  onSuccess: () => setSubmitting(false),
                  onError: () => setSubmitting(false),
                });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  {/* First Name */}
                  <div id="firstname">
                    <label
                      htmlFor="firstName"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      First Name <span className="text-teal-600">*</span>
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      autoComplete="on"
                      className="w-full border text-teal-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1 transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-600 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  {/* Last Name */}
                  <div id="lastname">
                    <label
                      htmlFor="lastName"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      Last Name <span className="text-teal-600">*</span>
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      autoComplete="on"
                      className="w-full border text-teal-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1 transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-600 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  {/* Email */}
                  <div id="email">
                    <label
                      htmlFor="email"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      Email <span className="text-teal-600">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      autoComplete="on"
                      className="w-full border text-teal-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1 transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  {/* Password */}
                  <div id="password" className="relative">
                    <label
                      htmlFor="password"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      Password <span className="text-teal-600">*</span>
                    </label>
                    <Field
                      type={show ? "text" : "password"}
                      name="password"
                      autoComplete="on"
                      className="w-full border text-teal-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1 transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                    <div
                      id="menuIcon"
                      className="absolute inset-y-0 lg:top-6 top-8 right-2 flex items-center cursor-pointer"
                    >
                      {show ? (
                        <FiEye
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold text-teal-600"
                          onClick={() => setShow(false)}
                        />
                      ) : (
                        <RiEyeOffFill
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold text-teal-600"
                          onClick={() => setShow(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:text-[15px] md:text-[28px] text-[23px]">
                      <p>
                        Remembered Password?{" "}
                        <Link
                          to={"/Login"}
                          className="text-teal-600 hover:underline font-semibold tracking-wider"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full border-[1px] gap-2 border-teal-600 lg:p-2 md:p-4 p-3 lg:text-[20px] md:text-[25px] text-[24px] hover:bg-teal-600 hover:text-gray-50 transition-all text-center"
                  >
                    {isSubmitting || mutation.isLoading
                      ? "Registering..."
                      : "Register"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
