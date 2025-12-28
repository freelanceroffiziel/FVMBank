import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaSearch } from "react-icons/fa";

const HomePaymentTracker = () => {
  const [result, setResult] = useState(null);

  const validationSchema = Yup.object({
    tid: Yup.string()
      .required("Transaction ID is required")
      .min(8, "Invalid Transaction ID"),
  });

  const handleSubmit = (values) => {
    setResult({ tid: values.tid });
  };

  return (
    <main className="w-full flex justify-center lg:py-12 lg:px-8 md:py-3 md:px-3 px-2 py-2 bg-gray-300 rounded">
      <section className="bg-white w-full  shadow-lg rounded-lg p-8 border border-gray-200">
        {/* Header */}
        <h1 className="lg:text-3xl md:text-[40px] text-[26px] font-bold text-center text-teal-800 mb-1">
          Track Your Payment
        </h1>
        <p className="text-center text-gray-600 mb-8 lg:text-[16px] text-[18px] md:text-[22px]">
          Enter your Transaction ID (TID) to check your payment status.
        </p>

        {/* Form */}
        <Formik
          initialValues={{ tid: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Input + Icon */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-7 -translate-y-1/2 text-teal-600 text-xl" />
                <Field
                  type="text"
                  name="tid"
                  placeholder="Enter Transaction ID"
                  className="w-full border border-teal-600 p-3 pl-12 rounded-md text-lg focus:ring-2 focus:ring-teal-500 outline-none text-gray-400 "
                />
                <ErrorMessage
                  name="tid"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-900 text-white font-semibold text-lg p-3 rounded-md transition-all"
              >
                {isSubmitting ? "Checking..." : "Track Payment"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default HomePaymentTracker;
