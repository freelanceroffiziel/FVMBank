import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

const ResetPassword = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);

      // Example API call
      // await axios.post("/api/auth/reset-password", values)

      toast.success("Reset link sent to your email");
    } catch (error) {
      toast.error("Something went wrong");
    }

    setSubmitting(false);
  };

  return (
    <main className="lg:mt-[22vh] mt-[15vh] md:mt-[20vh] w-full">
      <section className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex-col flex gap-4 bg-white px-6 py-12 rounded-lg shadow-lg text-navyBlue">
        
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[35px] font-serif font-semibold text-teal-800">
            Reset Password
          </h1>
          <hr className="w-[60px] border-red-800 border-4 border-dashed rounded-full" />
        </div>

        <ToastContainer />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">

              <div>
                <label className="text-[18px]">
                  Email <span className="text-teal-600">*</span>
                </label>

                <Field
                  type="email"
                  name="email"
                  className="w-full border text-teal-600 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-teal-600"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-teal-600 p-3 text-xl hover:bg-teal-600 hover:text-white transition"
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>

            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default ResetPassword;