import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const initialValues = {
    otp: "",
  };

  const validationSchema = Yup.object({
    otp: Yup.string()
      .length(6, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);

      // Example API
      // await axios.post("/api/auth/verify-otp", values)

      toast.success("OTP verified successfully");

      setTimeout(() => {
        navigate("/ResetPasswordToken");
      }, 1500);
    } catch (error) {
      toast.error("Invalid OTP");
    }

    setSubmitting(false);
  };

  return (
    <>
      <main className="lg:mt-[22vh] mt-[15vh] md:mt-[20vh] w-full">
        <section className="lg:max-w-md md:max-w-2xl max-w-[23rem] mx-auto flex-col flex gap-4 bg-white px-6 py-12 rounded-lg shadow-lg text-navyBlue">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[35px] font-serif font-semibold text-teal-800">
              Verify OTP
            </h1>
            <hr className="w-[60px] border-red-800 border-4 border-dashed rounded-full" />
          </div>

          <p className="text-center text-gray-500">
            Enter the 6-digit code sent to your email
          </p>

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
                    OTP <span className="text-teal-600">*</span>
                  </label>

                  <Field
                    type="text"
                    name="otp"
                    maxLength="6"
                    className="w-full border text-teal-600 rounded-md p-3 text-center tracking-[10px] text-xl focus:outline-none focus:ring-1 focus:ring-teal-600"
                  />

                  <ErrorMessage
                    name="otp"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-teal-600 p-3 text-xl hover:bg-teal-600 hover:text-white transition"
                >
                  {isSubmitting ? "Verifying..." : "Verify OTP"}
                </button>

                <p className="text-center text-gray-500">
                  Didn’t receive code?{" "}
                  <span className="text-teal-600 cursor-pointer hover:underline">
                    Resend OTP
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </>
  );
};

export default VerifyOTP;
