import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../context/useAuth";
import "react-toastify/dist/ReactToastify.css";

const AdminPinVerification = () => {
  const { createPin, resetPin } = useAuth();

  /** Create PIN Form */
  const createInitialValues = { pin: "" };
  const createValidationSchema = Yup.object({
    pin: Yup.string()
      .required("PIN is required")
      .matches(/^\d{4}$/, "PIN must be 4 digits"),
  });

  /** Reset PIN Form */
  const resetInitialValues = { oldPin: "", newPin: "" };
  const resetValidationSchema = Yup.object({
    oldPin: Yup.string()
      .required("Old PIN is required")
      .matches(/^\d{4}$/, "PIN must be 4 digits"),
    newPin: Yup.string()
      .required("New PIN is required")
      .matches(/^\d{4}$/, "PIN must be 4 digits"),
  });

  /** Handlers */
  const handleCreateSubmit = async (values, { setSubmitting, resetForm }) => {
    const result = await createPin(values.pin);
    toast[result.success ? "Pin Succesfully Created" : "error"](result.message);
    if (result.success) resetForm();
    setSubmitting(false);
  };

  const handleResetSubmit = async (values, { setSubmitting, resetForm }) => {
    const result = await resetPin(values.oldPin, values.newPin);
    toast[result.success ? "Reset Confirmed" : "error"](result.message);
    if (result.success) resetForm();
    setSubmitting(false);
  };

  return (
    <main>
      <section className="flex justify-center mt-10">
        <div className="w-full max-w-6xl bg-teal-800 rounded-lg p-6 text-gray-100 shadow-md">
          <h2 className="text-center text-teal-600 text-3xl font-semibold mb-6">
            PIN Management
          </h2>

          <ToastContainer />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Create PIN Form */}
            <div className="bg-teal-900 p-6 rounded-md flex flex-col items-center justify-center createPinDiv">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">
                Create PIN
              </h3>
              <Formik
                initialValues={createInitialValues}
                validationSchema={createValidationSchema}
                onSubmit={handleCreateSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full max-w-sm space-y-4 flex flex-col items-center">
                    <Field
                      type="password"
                      name="pin"
                      placeholder="Enter 4-digit PIN"
                      className="w-full py-2 px-3 rounded-md placeholder:text-gray-100 text-gray-100 border border-gray-100 outline-none text-center"
                    />
                    <ErrorMessage
                      name="pin"
                      component="div"
                      className="text-red-500 text-center"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors"
                    >
                      {isSubmitting ? "Creating PIN..." : "Create PIN"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            {/* Reset PIN Form */}
            <div className="bg-teal-900 p-6 rounded-md flex flex-col items-center justify-center resetPinDiv">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">
                Reset PIN
              </h3>
              <Formik
                initialValues={resetInitialValues}
                validationSchema={resetValidationSchema}
                onSubmit={handleResetSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full max-w-sm space-y-4 flex flex-col items-center">
                    <Field
                      type="password"
                      name="oldPin"
                      placeholder="Enter Old PIN"
                      className="w-full py-2 px-3 rounded-md placeholder:text-gray-100 text-gray-100 border border-gray-100 outline-none text-center"
                    />
                    <ErrorMessage
                      name="oldPin"
                      component="div"
                      className="text-red-500 text-center"
                    />

                    <Field
                      type="password"
                      name="newPin"
                      placeholder="Enter New PIN"
                      className="w-full py-2 px-3 rounded-md placeholder:text-gray-100 text-gray-100 border border-gray-100 outline-none text-center"
                    />
                    <ErrorMessage
                      name="newPin"
                      component="div"
                      className="text-red-500 text-center"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors"
                    >
                      {isSubmitting ? "Resetting PIN..." : "Reset PIN"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminPinVerification;
