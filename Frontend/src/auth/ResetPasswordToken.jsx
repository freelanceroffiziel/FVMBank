import React from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

const ResetPasswordToken = () => {
  const { token } = useParams();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values, token);

      // Example API
      // await axios.post(`/api/auth/reset-password/${token}`, values)

      toast.success("Password reset successful");
    } catch (error) {
      toast.error("Reset failed");
    }

    setSubmitting(false);
  };

  return (
    <main className="lg:mt-[22vh] mt-[15vh] md:mt-[20vh] w-full">
      <section className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex flex-col gap-4 bg-white px-6 py-12 rounded-lg shadow-lg text-navyBlue">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[35px] font-serif font-semibold text-teal-800">
            Create New Password
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
                <label>Password</label>

                <Field
                  type="password"
                  name="password"
                  className="w-full border rounded-md p-3"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label>Confirm Password</label>

                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full border rounded-md p-3"
                />

                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-teal-600 p-3 text-xl hover:bg-teal-600 hover:text-white transition"
              >
                {isSubmitting ? "Resetting..." : "Reset Password"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default ResetPasswordToken;
