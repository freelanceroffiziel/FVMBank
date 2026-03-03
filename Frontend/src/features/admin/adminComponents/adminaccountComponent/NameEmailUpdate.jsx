import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../context/useAuth";

const NameEmailUpdate = () => {
  const { NameEmailUpdate } = useAuth();
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { success, message } = await NameEmailUpdate(values);

    if (success) {
      toast.success(message);
      resetForm();
    } else {
      toast.error(message);
    }

    setSubmitting(false);
  };

  return (
    <main>
      <div
        id="passwordUpdateCon"
        className="text-gray-100 bg-teal-800 rounded "
      >
        <div id="passwordUpdateSon" className="flex flex-col gap-8 px-5 py-10">
          <span className="flex flex-row items-center justify-center ">
            <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-teal-600 ">
              Name & Email
            </p>
          </span>

          <div id="formsGenCon">
            <ToastContainer />
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 ">
                  <div id="firstNameDiv" className="flex flex-col gap-2 ">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="firstName"
                      name="firstName"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      placeholder="First Name"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div id="lastNameDiv" className="flex flex-col gap-2 ">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="lastName"
                      name="lastName"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      placeholder="Last Name"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div id="emailDiv" className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      autoComplete="on"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300 "
                    >
                      {isSubmitting ? " Updating ..." : " Update"}
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

export default NameEmailUpdate;
