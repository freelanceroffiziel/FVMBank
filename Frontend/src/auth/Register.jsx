import React, { useState } from "react";
import { RiEyeOffFill } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/authApi";
import { toast, ToastContainer } from "react-toastify";

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

  const mutation = useMutation({
    mutationFn: registerUser,
  });

  return (
    <>
      <main className="lg:mt-[20vh] mt-[15vh] md:mt-[15vh] w-full">
        <section className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex-col flex gap-4 bg-white px-6 md:px-10 lg:px-6 py-12 rounded-lg shadow-lg text-navyBlue h-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-center text-[35px] lg:text-[30px] md:text-[40px] font-serif font-semibold text-teal-800">
              Register
            </h1>
            <hr className="w-[60px] border-red-800 lg:border-2 border-4 border-dashed rounded-full" />
          </div>

          <ToastContainer className="mt-14" />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const payload = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              };

              try {
                const data = await mutation.mutateAsync(payload);

                toast.success("OTP sent to your email!");

                setTimeout(() => {
                  navigate("/verify-otp", {
                    state: { email: data.email },
                  });
                }, 2000); 
              } catch (error) {
                toast.error(error.message || "Registration failed");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="lg:text-[15px] md:text-[28px] text-[22px]">
                    First Name <span className="text-teal-600">*</span>
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    className="w-full p-3 text-teal-600 border rounded-md"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <label className="lg:text-[15px] md:text-[28px] text-[22px]">
                    Last Name <span className="text-teal-600">*</span>
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    className="w-full p-3 text-teal-600 border rounded-md"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <label className="lg:text-[15px] md:text-[28px] text-[22px]">
                    Email <span className="text-teal-600">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-3 text-teal-600 border rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="relative">
                  <label className="lg:text-[15px] md:text-[28px] text-[22px]">
                    Password <span className="text-teal-600">*</span>
                  </label>
                  <Field
                    type={show ? "text" : "password"}
                    name="password"
                    className="w-full p-3 text-teal-600 border rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />

                  <div className="absolute cursor-pointer top-10 right-3">
                    {show ? (
                      <FiEye onClick={() => setShow(false)} />
                    ) : (
                      <RiEyeOffFill onClick={() => setShow(true)} />
                    )}
                  </div>
                </div>
                <p>
                  Remembered Password?{" "}
                  <Link to="/login" className="font-semibold text-teal-600">
                    Login
                  </Link>
                </p>
                <button
                  type="submit"
                  className="w-full p-3 border border-teal-600 hover:bg-teal-600 hover:text-white"
                >
                  {isSubmitting || mutation.isLoading
                    ? "Registering..."
                    : "Register"}
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </>
  );
};

export default Register;
