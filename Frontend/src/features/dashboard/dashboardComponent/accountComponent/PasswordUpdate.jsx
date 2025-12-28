import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";

const PasswordUpdate = () => {
  const initialValues = {
    NewPassword: "",
    reTypePassword: "",
  };

  console.log(initialValues);
  const validationSchema = Yup.object({
    NewPassword: Yup.string()
      .required(6, "Password must be at least 6 character")
      .required("Password is required"),
    reTypePassword: Yup.string()
      .required(6, "Password must match")
      .required("Password is required"),
  });

  return (
    <main>
      <div
        id="passwordUpdateCon"
        className="text-gray-100 bg-teal-900 rounded "
      >
        <div id="passwordUpdateSon" className="flex flex-col gap-8 px-5 py-10">
          <span className="flex flex-row items-center justify-center ">
            <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-green-600 ">
              Change <p className="font-bold text-orange-600 "> your</p>{" "}
              <p className="text-gray-300"> Password</p>
            </p>
          </span>

          <div id="formsGenCon">
            <ToastContainer />
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 ">
                  <div id="NewPasswordDiv" className="flex flex-col gap-2 ">
                    <label htmlFor="NewPassword">New Password</label>
                    <Field
                      type="NewPassword"
                      name="NewPassword"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      placeholder="Enter Password"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="NewPassword"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div id="ReTypePasswordDiv" className="flex flex-col gap-2">
                    <label htmlFor="reTypePassword">ReType Password</label>
                    <Field
                      type="reTypePassword"
                      name="reTypePassword"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      autoComplete="on"
                      placeholder="ReType Password"
                    />
                    <ErrorMessage
                      name="reTypePassword"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300 "
                    >
                      {isSubmitting
                        ? " Updating Password..."
                        : " Update Password "}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordUpdate;
