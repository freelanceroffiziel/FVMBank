import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../context/useAuth";

const AdminKyc = () => {
  const { verifyBVN, verifyNIN } = useAuth();

  const initialBvnValues = { idNumber: "", firstname: "", lastname: "" };
  const initialNinValues = { idNumber: "", firstname: "", lastname: "" };

  const bvnValidationSchema = Yup.object({
    idNumber: Yup.string().required("BVN is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
  });

  const ninValidationSchema = Yup.object({
    idNumber: Yup.string().required("NIN is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
  });

  const handleBvnSubmit = async (values, { setSubmitting, resetform }) => {
    const result = await verifyBVN(values); // call backend
    if (result.success) {
      toast.success(result.message || "BVN verified!");
      console.log("BVN Response:", result.data);
      resetform();
    } else {
      toast.error(result.message || "BVN verification failed");
    }
    setSubmitting(false);
  };

  const handleNinSubmit = async (values, { setSubmitting, resetform}) => {
    const result = await verifyNIN(values); 
    if (result.success) {
      toast.success(result.message || "NIN verified!");
      resetform();
      console.log("NIN Response:", result.data);
    } else {
      toast.error(result.message || "NIN verification failed");
    }
    setSubmitting(false);
  };

  return (
    <main>
      <section className="flex justify-center mt-10">
        <div className="w-full bg-teal-800 rounded-lg p-4 text-gray-100 shadow-md">
          <h2 className="text-center text-teal-600 text-3xl font-semibold mb-6">
            KYC Verification
          </h2>

          <ToastContainer />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BVN Form */}
            <Formik
              initialValues={initialBvnValues}
              validationSchema={bvnValidationSchema}
              onSubmit={handleBvnSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 bg-teal-900 p-4 rounded-md">
                  <h3 className="text-teal-400 text-xl font-semibold">
                    Verify BVN
                  </h3>

                  <Field
                    name="idNumber"
                    placeholder="BVN"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="idNumber"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    name="firstname"
                    placeholder="First Name"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors"
                  >
                    {isSubmitting ? "Verifying BVN..." : "Verify BVN"}
                  </button>
                </Form>
              )}
            </Formik>

            {/* NIN Form */}
            <Formik
              initialValues={initialNinValues}
              validationSchema={ninValidationSchema}
              onSubmit={handleNinSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 bg-teal-900 p-4 rounded-md">
                  <h3 className="text-teal-400 text-xl font-semibold">
                    Verify NIN
                  </h3>

                  <Field
                    name="idNumber"
                    placeholder="NIN"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="idNumber"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    name="firstname"
                    placeholder="First Name"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full py-2 px-3 rounded-md border border-gray-100 outline-none"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors"
                  >
                    {isSubmitting ? "Verifying NIN..." : "Verify NIN"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminKyc;
