import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountInfoUpdate = () => {
  const initialValues = {
    phone: "",
    dateOfBirth: "",
    country: "",
    address: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
      .required("Phone is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    country: Yup.string().required("Country is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Submitted values:", values);
    setTimeout(() => {
      toast.success("Account information updated!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <main>
      <section>
        <div id="accountInfo" className="text-gray-100 bg-teal-900 rounded">
          <div id="accountInfoSon" className="flex flex-col gap-6 px-5 py-10">
            <span>
              <p className="flex flex-row items-center gap-2 text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-green-600">
                Update <span className="font-bold text-orange-600">your</span>{" "}
                <span className="text-gray-300">Account information</span>
              </p>
            </span>

            <div id="formCon">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-2">
                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="mb-2 font-medium">
                        Phone
                      </label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="bg-teal-900 outline-none rounded-md border-[1px] border-gray-100 py-1.5 pl-1"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-[14px]"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                      <label htmlFor="dateOfBirth" className="mb-2 font-medium">
                        Date of Birth
                      </label>
                      <Field
                        type="date"
                        name="dateOfBirth"
                        className="bg-teal-900 outline-none rounded-md border-[1px] border-gray-100 py-1.5 pl-1"
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="div"
                        className="text-red-500 text-[14px]"
                      />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="country">Country</label>
                      <Field
                        as="select"
                        name="country"
                        className="bg-teal-900 outline-none rounded-md border-[1px] border-gray-100 py-1.5 pl-1"
                      >
                        <option value="">Select Country</option>
                        <option value="usa">USA</option>
                        <option value="uk">United Kingdom</option>
                        <option value="nigeria">Nigeria</option>
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500 text-[14px]"
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="address">Address</label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Enter address"
                        className="bg-teal-900 outline-none rounded-md border-[1px] border-gray-100 py-1.5 pl-1"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-500 text-[14px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300"
                      >
                        {isSubmitting ? "Updating Info..." : "Update Info"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountInfoUpdate;
