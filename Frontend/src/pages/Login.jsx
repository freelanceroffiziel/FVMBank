import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <>
      <main
        id="regisCon"
        className="lg:mt-[22vh] mt-[15vh] md:mt-[20vh] w-full"
      >
        <section
          id="regisSon"
          className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex-col flex gap-4 bg-white px-6 py-12 rounded-lg shadow-lg text-navyBlue"
        >
          <div className="flex flex-col items-center justify-center gap-1 ">
            <h1 className="text-center text-[35px] lg:text-[30px] md:text-[40px] font-serif font-semibold text-orange-600 ">
              Login
            </h1>
            <hr className="w-[60px] border-green-600  lg:border-2 border-4 border-dashed rounded-full " />
          </div>
          <div id="formCon" className="">
            <ToastContainer className="mt-14" />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div id="email">
                    <label
                      htmlFor="email"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      Email <span className="text-green-600">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      autoComplete="on"
                      className="w-full border text-green-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1  transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div id="password">
                    <label
                      htmlFor="password"
                      className="lg:text-[15px] md:text-[28px] text-[22px]"
                    >
                      Password <span className="text-green-600">*</span>
                    </label>
                    <Field
                      type="password"
                      name="password"
                      autoComplete="on"
                      className="w-full border text-green-600 rounded-md lg:p-2 md:p-4 p-3 focus:outline-none focus:outline-2 focus:outline-brightTeal lg:text-[18px] md:text-[25px] text-[22px] focus:ring-brightTeal focus:ring-1  transition duration-500 ease-in-out"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div className="w-full">
                    <div className="lg:text-[15px] md:text-[28px] text-[22px] flex flex-col lg:flex-row justify-between">
                      <p className="md:tracking-wider">
                        don&apos;t have account?{" "}
                        <Link
                          to={"/Register"}
                          className="font-semibold tracking-wider text-green-600 hover:underline "
                        >
                          Register
                        </Link>
                      </p>

                      <p className="text-green-400 hover:text-brightTeal md:tracking-wider hover:underline ">
                        <Link to={"/ResetPassword"} >Reset Password?</Link>
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full border-[1px] gap-2 border-green-600 lg:p-2 md:p-4 p-3 lg:text-[20px] md:text-[25px] text-[24px] hover:bg-green-600 hover:text-gray-50 transition-all text-center"
                  >
                    {isSubmitting ? "Login..." : "Login"}
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

export default Login;
